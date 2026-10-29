const CONFIG_KEY='strengthCompanionFirebaseConfigV1';
const SETTINGS_DOC_ID='__strengthCompanionSettings';
const $=id=>document.getElementById(id);
let sdk=null, app=null, auth=null, db=null, user=null, unsubscribe=null, settingsUnsubscribe=null;
let applyingCloud=false, applyingSettings=false, cloudReady=false;
let lastCloudMap=new Map(), localSyncTimer=null, localSyncInFlight=false, localSyncAgain=false, settingsSyncTimer=null;
const api=()=>window.StrengthCompanion;
async function waitForApi(timeoutMs=20000){
  const start=Date.now();
  while(Date.now()-start<timeoutMs){
    const a=api();
    if(a&&typeof a.getRecords==='function'&&typeof a.setRecords==='function')return a;
    await new Promise(r=>setTimeout(r,50));
  }
  throw new Error('The main app is still loading. Refresh the page and try again.');
}
function status(kind,title,detail=''){const box=$('cloudStatus');if(!box)return;box.className=`cloud-status ${kind}`;box.innerHTML=`<b>${escapeHtml(title)}</b><span>${escapeHtml(detail)}</span>`;}
function message(id,text){const e=$(id);if(e)e.textContent=text||'';}
function escapeHtml(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function localRecords(){const a=api();return a&&typeof a.getRecords==='function'?a.getRecords():[];}
function updatedMs(r){const n=Date.parse(r?.updatedAt||'');return Number.isFinite(n)?n:0;}
function recordHash(r){try{return JSON.stringify(r)}catch{return ''}}
function mapRecords(records=[]){return new Map((records||[]).filter(r=>r?.id).map(r=>[r.id,r]));}
function mergeRecords(a,b){const map=new Map();[...(a||[]),...(b||[])].forEach(r=>{if(!r?.id)return;const prev=map.get(r.id);if(!prev||updatedMs(r)>=updatedMs(prev))map.set(r.id,r)});return [...map.values()].sort((x,y)=>(x.date||'').localeCompare(y.date||''));}
function updateMigration(){const n=localRecords().length;message('migrationStatus',n?`${n} existing workout/recovery record${n===1?'':'s'} found. This build uses the same local-storage key, so they are already retained.`:'No existing records are currently stored in this browser.');}
function parseConfig(raw){let t=(raw||'').trim();if(!t)throw new Error('Paste the Firebase configuration block first.');t=t.replace(/^\s*(?:const|let|var)\s+firebaseConfig\s*=\s*/,'').replace(/;\s*$/,'').trim();let obj;try{obj=JSON.parse(t)}catch{try{obj=Function(`"use strict";return (${t})`)()}catch{throw new Error('Could not parse the Firebase configuration block. Paste it exactly as Firebase provides it.')}}const required=['apiKey','authDomain','projectId','appId'];const missing=required.filter(k=>!obj?.[k]);if(missing.length)throw new Error(`Missing required value${missing.length>1?'s':''}: ${missing.join(', ')}`);return obj;}
function configBlock(c){return c?`const firebaseConfig = ${JSON.stringify(c,null,2)};`:'';}
function savedConfig(){try{return JSON.parse(localStorage.getItem(CONFIG_KEY)||'null')}catch{return null}}
async function loadSdk(){if(sdk)return sdk;status('syncing','Loading Firebase','Connecting to Firebase…');try{const [appMod,authMod,fsMod]=await Promise.all([import('https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js'),import('https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js'),import('https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js')]);sdk={...appMod,...authMod,...fsMod};return sdk}catch(e){status('error','Firebase failed to load',e.message);throw new Error('Firebase scripts could not load. Check the internet connection, browser extensions, or content-blocking settings.');}}
async function initializeFirebase(){
  const c=savedConfig();
  if(!c){status('local','Local only','Paste and save a Firebase configuration to enable cloud sync.');return;}
  const f=await loadSdk();
  try{
    app=f.getApps().length?f.getApp():f.initializeApp(c);
    auth=f.getAuth(app);
    try{await f.setPersistence(auth,f.browserLocalPersistence)}catch(e){console.warn('Auth persistence warning',e)}
    db=f.getFirestore(app);
    f.onAuthStateChanged(auth,async u=>{
      user=u||null;
      if(user){message('authMessage',`Signed in as ${user.email||user.displayName||user.uid}`);status('syncing','Signed in','Loading cloud history…');await startCloud();}
      else{stopListeners();cloudReady=false;lastCloudMap=new Map();status('ready','Cloud configured','Sign in to synchronize history.');message('authMessage','Not signed in.');}
    });
    status('ready','Firebase configured','Sign in to begin synchronization.');
  }catch(e){status('error','Firebase initialization error',e.message);throw e;}
}
function stopListeners(){if(unsubscribe){unsubscribe();unsubscribe=null}if(settingsUnsubscribe){settingsUnsubscribe();settingsUnsubscribe=null}}
function workoutsCollection(){return sdk.collection(db,'users',user.uid,'workouts');}
function workoutDocument(id){return sdk.doc(db,'users',user.uid,'workouts',id);}
// Store flexible-schedule settings inside the already-authorized workouts path so existing Firestore rules keep working.
function settingsDocument(){return workoutDocument(SETTINGS_DOC_ID);}
function localSettings(){const a=api();return a&&typeof a.getSettings==='function'?a.getSettings():null;}
function settingsMs(s){const n=Date.parse(s?.updatedAt||'');return Number.isFinite(n)?n:0;}
function settingsPayload(s){return {...s,id:SETTINGS_DOC_ID,kind:'__settings__'};}
function stripSettingsPayload(s){if(!s)return null;const {id,kind,...rest}=s;return rest;}
async function writeSettingsSafely(s=localSettings()){
  if(!user||!s)return false;
  return sdk.runTransaction(db,async tx=>{
    const ref=settingsDocument(),snap=await tx.get(ref);
    if(snap.exists()){
      const remote=stripSettingsPayload(snap.data());
      if(settingsMs(remote)>settingsMs(s))return false;
    }
    tx.set(ref,settingsPayload(s),{merge:false});
    return true;
  });
}
async function writeSettings(s=localSettings()){
  const wrote=await writeSettingsSafely(s);
  if(!wrote){
    const remote=await cloudSettings();
    if(remote&&settingsMs(remote)>settingsMs(localSettings())){
      applyingSettings=true;
      const main=await waitForApi();
      main.setSettings?.(remote);
      applyingSettings=false;
    }
  }
  return wrote;
}
async function cloudSettings(){const snap=await sdk.getDoc(settingsDocument());return snap.exists()?stripSettingsPayload(snap.data()):null;}
async function cloudRecords(){const snap=await sdk.getDocs(workoutsCollection());return snap.docs.filter(d=>d.id!==SETTINGS_DOC_ID).map(d=>d.data()).filter(r=>r?.id);}
async function writeRecordSafely(r){
  if(!r?.id||r.id===SETTINGS_DOC_ID)return false;
  return sdk.runTransaction(db,async tx=>{
    const ref=workoutDocument(r.id),snap=await tx.get(ref);
    if(snap.exists()&&updatedMs(snap.data())>updatedMs(r))return false;
    tx.set(ref,r,{merge:false});return true;
  });
}
async function deleteRecordIfUnchanged(id,baseline){
  if(!id||id===SETTINGS_DOC_ID)return false;
  const baseMs=updatedMs(baseline);
  return sdk.runTransaction(db,async tx=>{
    const ref=workoutDocument(id),snap=await tx.get(ref);
    if(!snap.exists())return true;
    if(updatedMs(snap.data())>baseMs)return false;
    tx.delete(ref);return true;
  });
}
async function uploadChangedRecords(records=localRecords(),baseline=lastCloudMap){
  let writes=0;
  for(const r of records){const b=baseline.get(r.id);if(!b||recordHash(b)!==recordHash(r)){if(await writeRecordSafely(r))writes++;}}
  return writes;
}
function scheduleLocalSync(delay=500){
  if(!user||!cloudReady||applyingCloud)return;
  clearTimeout(localSyncTimer);
  localSyncTimer=setTimeout(()=>flushLocalChanges().catch(e=>{status('error','Sync error',e.message);message('syncMessage',e.message)}),delay);
}
async function flushLocalChanges(){
  if(!user||!cloudReady||applyingCloud)return;
  if(localSyncInFlight){localSyncAgain=true;return;}
  localSyncInFlight=true;
  try{
    status('syncing','Synchronizing','Saving changed records…');
    const locals=localRecords(),localMap=mapRecords(locals),baseline=new Map(lastCloudMap);
    let writes=0,deletes=0,conflicts=0;
    for(const r of locals){const b=baseline.get(r.id);if(!b||recordHash(b)!==recordHash(r)){if(await writeRecordSafely(r))writes++;else conflicts++;}}
    for(const [id,b] of baseline){if(!localMap.has(id)){if(await deleteRecordIfUnchanged(id,b))deletes++;else conflicts++;}}
    status('ready','Automatic sync active',`${writes+deletes?`${writes} change${writes===1?'':'s'} saved${deletes?` · ${deletes} deletion${deletes===1?'':'s'}`:''}`:'Cloud is current'}${conflicts?` · ${conflicts} newer cloud change${conflicts===1?'':'s'} preserved`:''}.`);
  }finally{
    localSyncInFlight=false;
    if(localSyncAgain){localSyncAgain=false;scheduleLocalSync(100);}
  }
}
function reconcileFromLocal(){scheduleLocalSync();}
function reconcileSettingsFromLocal(){if(!user||applyingSettings)return;clearTimeout(settingsSyncTimer);settingsSyncTimer=setTimeout(async()=>{try{const s=localSettings();if(s)await writeSettings(s)}catch(e){console.error('Settings sync error',e);message('syncMessage',`Workout history is synced; schedule-setting sync warning: ${e.message}`)}},400);}
async function startSettingsCloud(){
  if(settingsUnsubscribe){settingsUnsubscribe();settingsUnsubscribe=null}
  try{
    const main=await waitForApi(),local=localSettings(),remote=await cloudSettings();
    if(remote&&settingsMs(remote)>settingsMs(local)){applyingSettings=true;main.setSettings?.(remote);applyingSettings=false;}else if(local){await writeSettings(local);}
    settingsUnsubscribe=sdk.onSnapshot(settingsDocument(),{includeMetadataChanges:true},async snap=>{
      if(snap.metadata?.hasPendingWrites||!snap.exists())return;
      const remoteNow=stripSettingsPayload(snap.data()),localNow=localSettings();
      if(settingsMs(remoteNow)>settingsMs(localNow)){applyingSettings=true;const a=await waitForApi();a.setSettings?.(remoteNow);applyingSettings=false;}
    },e=>{console.error('Settings listener error',e);message('syncMessage',`Workout history remains synced; schedule-setting listener warning: ${e.message}`)});
  }catch(e){console.error('Settings startup warning',e);message('syncMessage',`Workout history is syncing; schedule settings could not sync yet: ${e.message}`);}
}
function applyRemoteSnapshot(remote,previousCloud){
  const remoteMap=mapRecords(remote),local=localRecords(),localMap=mapRecords(local),kept=[];
  // Respect cloud deletions unless this device has independently edited that same record since its last cloud copy.
  for(const r of local){
    if(remoteMap.has(r.id)){kept.push(r);continue;}
    const prev=previousCloud.get(r.id);
    if(!prev){kept.push(r);continue;}
    const locallyChanged=recordHash(r)!==recordHash(prev)&&updatedMs(r)>updatedMs(prev);
    if(locallyChanged)kept.push(r);
  }
  return mergeRecords(kept,remote);
}
async function startCloud(){
  stopListeners();
  cloudReady=false;
  try{
    const main=await waitForApi(),remote=await cloudRecords(),local=localRecords();
    lastCloudMap=mapRecords(remote);
    const merged=mergeRecords(local,remote);
    applyingCloud=true;main.setRecords(merged);applyingCloud=false;
    // Upload only local records missing from / newer than the initial cloud snapshot. Never bulk-overwrite every record.
    await uploadChangedRecords(merged,lastCloudMap);
    main.refreshPassive?.();
    cloudReady=true;
    await startSettingsCloud();
  }catch(e){applyingCloud=false;status('error','Initial cloud merge error',e.message);message('syncMessage',e.message);return;}

  const ref=workoutsCollection();
  unsubscribe=sdk.onSnapshot(ref,{includeMetadataChanges:true},async snap=>{
    try{
      if(snap.metadata?.hasPendingWrites){status('syncing','Synchronizing','Saving changes…');return;}
      const remote=snap.docs.filter(d=>d.id!==SETTINGS_DOC_ID).map(d=>d.data()).filter(r=>r?.id);
      const previousCloud=new Map(lastCloudMap),before=mapRecords(localRecords());
      const merged=applyRemoteSnapshot(remote,previousCloud);
      lastCloudMap=mapRecords(remote);
      const changedIds=merged.filter(r=>recordHash(before.get(r.id))!==recordHash(r)).map(r=>r.id);
      for(const id of before.keys())if(!merged.some(r=>r.id===id))changedIds.push(id);
      if(changedIds.length){applyingCloud=true;const main=await waitForApi();main.setRecords(merged);applyingCloud=false;main.refreshFromCloud?.([...new Set(changedIds)]);}
      cloudReady=true;
      status('ready','Automatic sync active',`${remote.length} cloud record${remote.length===1?'':'s'} current · synced just now.`);
      message('syncMessage','Strength, Yoga & Mobility, walking, breathing, meditation, flexible weekly scheduling, History, Progress, and Dashboard sync automatically while signed in. Only changed records are transmitted.');
      // If this device retained a locally newer record during a remote update/deletion, queue that record back to cloud.
      scheduleLocalSync(150);
    }catch(e){applyingCloud=false;status('error','Sync error',e.message);message('syncMessage',e.message);}
  },e=>{status('error','Cloud listener error',e.message);message('syncMessage',e.message)});
}
async function saveConfig(){try{const c=parseConfig($('firebaseConfigBlock').value);localStorage.setItem(CONFIG_KEY,JSON.stringify(c));$('firebaseConfigBlock').value=configBlock(c);message('configMessage','Configuration saved in this browser. Initializing Firebase…');await initializeFirebase();}catch(e){status('error','Configuration error',e.message);message('configMessage',e.message);}}
async function googleSignIn(){try{if(!auth)await initializeFirebase();if(!auth)throw new Error('Save a Firebase configuration first.');const p=new sdk.GoogleAuthProvider();await sdk.signInWithPopup(auth,p);}catch(e){message('authMessage',e.message);status('error','Sign-in error',e.message);}}
async function emailSignIn(create=false){try{if(!auth)await initializeFirebase();if(!auth)throw new Error('Save a Firebase configuration first.');const email=$('cloudEmail').value.trim(),password=$('cloudPassword').value;if(!email||!password)throw new Error('Enter an email address and password.');if(create)await sdk.createUserWithEmailAndPassword(auth,email,password);else await sdk.signInWithEmailAndPassword(auth,email,password);}catch(e){message('authMessage',e.message);status('error','Sign-in error',e.message);}}
async function resetPassword(){try{if(!auth)await initializeFirebase();const email=$('cloudEmail').value.trim();if(!email)throw new Error('Enter your email address first.');await sdk.sendPasswordResetEmail(auth,email);message('authMessage','Password-reset email sent.');}catch(e){message('authMessage',e.message);}}
async function syncNow(mode='merge'){
  try{
    if(!user)throw new Error('Sign in first.');
    status('syncing','Synchronizing','Checking local and cloud changes…');
    const remote=await cloudRecords(),main=await waitForApi();
    lastCloudMap=mapRecords(remote);
    const merged=mergeRecords(localRecords(),remote);
    applyingCloud=true;main.setRecords(merged);applyingCloud=false;
    const n=await uploadChangedRecords(merged,lastCloudMap);
    await startSettingsCloud();
    main.refresh?.();cloudReady=true;
    message('syncMessage',`Synchronization complete. ${merged.length} records reconciled${n?` · ${n} local change${n===1?'':'s'} uploaded`:''}.`);
    status('ready','Automatic sync active','Local and cloud history are current.');
  }catch(e){status('error','Sync error',e.message);message('syncMessage',e.message);}
}
async function clearConfig(){
  localStorage.removeItem(CONFIG_KEY);$('firebaseConfigBlock').value='';stopListeners();cloudReady=false;user=null;
  try{if(auth&&sdk)await sdk.signOut(auth)}catch{}
  try{if(app&&sdk)await sdk.deleteApp(app)}catch{}
  auth=null;db=null;app=null;sdk=null;lastCloudMap=new Map();
  message('configMessage','Firebase configuration removed. Local workout history was not changed.');status('local','Local only','Cloud configuration removed.');
}
async function bind(){
  await waitForApi();
  const ids=['saveFirebaseConfig','clearFirebaseConfig','googleSignIn','emailSignIn','createAccount','resetPassword','signOutCloud','syncNow','uploadLocal','downloadCloud','cloudExportBackup'];
  if(ids.some(id=>!$(id))){console.error('Cloud UI is incomplete.');return;}
  $('saveFirebaseConfig').addEventListener('click',saveConfig);$('clearFirebaseConfig').addEventListener('click',clearConfig);
  $('googleSignIn').addEventListener('click',googleSignIn);$('emailSignIn').addEventListener('click',()=>emailSignIn(false));$('createAccount').addEventListener('click',()=>emailSignIn(true));$('resetPassword').addEventListener('click',resetPassword);
  $('signOutCloud').addEventListener('click',async()=>{try{if(auth)await sdk.signOut(auth)}catch(e){message('authMessage',e.message)}});
  $('syncNow').addEventListener('click',()=>syncNow('merge'));$('uploadLocal').addEventListener('click',()=>syncNow('merge'));$('downloadCloud').addEventListener('click',()=>syncNow('merge'));$('cloudExportBackup').addEventListener('click',()=>api()?.exportBackup?.());
  window.addEventListener('strength-records-changed',()=>{updateMigration();reconcileFromLocal()});window.addEventListener('strength-settings-changed',()=>reconcileSettingsFromLocal());
  const c=savedConfig();$('firebaseConfigBlock').value=configBlock(c);updateMigration();status(c?'ready':'local',c?'Firebase configuration found':'Local only',c?'Sign in to synchronize history.':'Cloud sync is optional.');if(c)initializeFirebase().catch(e=>message('configMessage',e.message));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>bind().catch(e=>status('error','Cloud initialization error',e.message)));else bind().catch(e=>status('error','Cloud initialization error',e.message));
