
const PROGRAM=[
{day:'Monday',kind:'strength',focus:'Lower Body + Push + Core',time:'60–75 min',mission:'Start the week with high-quality squat, hinge and pressing work while reinforcing trunk stability and posture.',warm:['March in place — 1 minute','Bodyweight squats — 10','Hip hinges — 10','Arm circles — 15 each direction','Bird Dog — 6 each side','Band pull-aparts — 15'],cool:['Kneeling hip-flexor stretch — 30 sec each side','Doorway chest stretch — 30 sec each side','Child’s Pose — 30–45 sec','Slow breathing — 5 breaths'],ex:[
{name:'Goblet Squat',sets:4,reps:'6–8',rest:'90–120 sec',cue:'Brace, sit between the hips, knees track over toes, drive through the whole foot.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Dumbbell Romanian Deadlift',sets:3,reps:'8–10',rest:'90 sec',cue:'Push hips back, keep weights close, neutral spine, squeeze glutes to stand.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Standing Dumbbell Overhead Press',sets:3,reps:'8–10',rest:'75–90 sec',cue:'Brace, ribs down, press without leaning back.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Reverse Dumbbell Lunge',sets:3,reps:'8 each leg',rest:'75 sec',cue:'Step back under control and drive through the front foot.',alt:'Step-Up',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Farmer Carry',sets:3,time:'45–60 sec',rest:'60 sec',cue:'Stand tall, shoulders level, controlled steps.',equipment:'Standing Dumbbells / Carry',priority:'Primary'},
{name:'Band Face Pull',sets:2,reps:'12–15',rest:'45 sec',cue:'Pull toward forehead, elbows high, avoid shrugging.',alt:'Rear-delt fly',equipment:'Resistance Band',priority:'Accessory'},
{name:'Dumbbell Floor Press',sets:3,reps:'8–10',rest:'75–90 sec',cue:'Shoulders packed, wrists straight, controlled lowering.',equipment:'Mat / Floor',priority:'Primary'},
{name:'Dead Bug',sets:2,reps:'8–10 each side',rest:'30 sec',cue:'Keep ribs down and lower back steady.',equipment:'Mat / Floor',priority:'Accessory'}
]},
{day:'Tuesday',kind:'recovery',focus:'Recovery: Yoga + Walking',time:'Recovery day',mission:'Promote recovery with yoga and easy walking. Use the Yoga & Walking tracker below to record one or more sessions.',warm:['No strength warm-up required. Choose activity according to energy, soreness, and recovery.'],cool:['Finish feeling restored rather than trained.'],ex:[
{name:'Mobility / Reset Work (Optional)',sets:1,time:'5–20 min',recovery:true,optional:true,rest:'',cue:'Use slow, pain-free movement for areas that feel stiff.'}
]},
{day:'Wednesday',kind:'strength',focus:'Posterior Chain + Pull + Arms + Core',time:'60–75 min',mission:'Build posterior-chain, back, grip and arm strength while reinforcing posture and anti-rotation core control.',warm:['March in place — 1 minute','Hip hinges — 10','Band pull-aparts — 15','Cat-Cow — 8','Bird Dog — 6 each side','World’s greatest stretch — 5 each side'],cool:['Figure-4 glute stretch — 30 sec each side','Open-book rotation — 6 each side','Lat stretch — 30 sec each side','Slow breathing — 5 breaths'],ex:[
{name:'Dumbbell Romanian Deadlift',sets:4,reps:'6–8',rest:'2 min',cue:'Brace, hips back, weights close, finish with glutes.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'One-Arm Dumbbell Row',sets:4,reps:'8–10 each side',rest:'75 sec',cue:'Pull elbow toward back pocket without twisting.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Bulgarian Split Squat',sets:3,reps:'8 each leg',rest:'90 sec',cue:'Stay tall and drive through the front foot.',alt:'Reverse Lunge',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Hammer Curl',sets:3,reps:'10–12',rest:'45 sec',cue:'Elbows close, no swinging, lower slowly.',equipment:'Standing Dumbbells',priority:'Accessory'},
{name:'Suitcase Carry',sets:3,time:'45–60 sec each side',rest:'45 sec',cue:'Resist leaning and keep shoulders level.',equipment:'Standing Dumbbells / Carry',priority:'Primary'},
{name:'Band Lat Pulldown',sets:3,reps:'10–12',rest:'60 sec',cue:'Drive elbows toward ribs and return slowly.',equipment:'Resistance Band',priority:'Primary'},
{name:'Pallof Press',sets:2,reps:'10 each side',rest:'30–45 sec',cue:'Keep hips and shoulders square; resist rotation.',equipment:'Resistance Band',priority:'Accessory'},
{name:'Dumbbell Hip Thrust',sets:3,reps:'10–12',rest:'75 sec',cue:'Ribs down, drive through heels, pause at the top.',alt:'Glute Bridge',equipment:'Mat / Floor',priority:'Primary'},
{name:'Side Plank',sets:2,time:'30–45 sec each side',rest:'30 sec',cue:'Keep hips lifted and body aligned.',equipment:'Mat / Floor',priority:'Accessory'}
]},
{day:'Thursday',kind:'recovery',focus:'Recovery: Yoga + Walking',time:'Recovery day',mission:'Use yoga, yin/restorative work, and easy walking to support mobility and recovery. Record each session below.',warm:['No strength warm-up required.'],cool:['Keep the day restorative and comfortable.'],ex:[
{name:'Mobility / Reset Work (Optional)',sets:1,time:'5–20 min',recovery:true,optional:true,rest:'',cue:'Focus on areas that feel restricted; never force range.'}
]},
{day:'Friday',kind:'strength',focus:'Upper Body Comprehensive + Core',time:'60–75 min',mission:'Train upper-body push and pull comprehensively while keeping leg fatigue modest before Saturday’s lower-body session.',warm:['March in place — 1 minute','Band pull-aparts — 15','Arm circles — 15 each direction','Shoulder rolls — 10 each direction','Scapular push-ups — 10'],cool:['Doorway chest stretch — 30 sec each side','Cross-body shoulder stretch — 30 sec each side','Lat stretch — 30 sec each side','Slow breathing — 5 breaths'],ex:[
{name:'Standing Dumbbell Overhead Press',sets:3,reps:'6–8',rest:'75–90 sec',cue:'Brace, ribs down, press without leaning back.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'One-Arm Dumbbell Row',sets:3,reps:'8–10 each side',rest:'75 sec',cue:'Stable torso, elbow toward hip, controlled return.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Alternating Dumbbell Curl',sets:3,reps:'10 each arm',rest:'45 sec',cue:'Elbows close and control the eccentric.',equipment:'Standing Dumbbells',priority:'Accessory'},
{name:'Band Face Pull',sets:3,reps:'12–15',rest:'45 sec',cue:'Elbows high, pull toward forehead, avoid shrugging.',equipment:'Resistance Band',priority:'Accessory'},
{name:'Band Lat Pulldown',sets:3,reps:'10–12',rest:'60 sec',cue:'Drive elbows toward ribs; chest lifted.',equipment:'Resistance Band',priority:'Primary'},
{name:'Band External Rotation',sets:2,reps:'12–15 each arm',rest:'30 sec',cue:'Elbow tucked; rotate from the shoulder.',equipment:'Resistance Band',priority:'Accessory'},
{name:'Dumbbell Floor Press',sets:4,reps:'8–10',rest:'75–90 sec',cue:'Shoulders packed, wrists straight, press smoothly.',equipment:'Mat / Floor',priority:'Primary'},
{name:'Overhead Dumbbell Triceps Extension',sets:3,reps:'10–12',rest:'45 sec',cue:'Keep ribs down and lower under control.',equipment:'Mat / Floor + Dumbbell',priority:'Accessory'},
{name:'Dead Bug',sets:2,reps:'10 each side',rest:'30 sec',cue:'Exhale as the limb extends; keep trunk steady.',equipment:'Mat / Floor',priority:'Accessory'}
]},
{day:'Saturday',kind:'strength',focus:'Lower Body Comprehensive + Functional Strength',time:'60–75 min',mission:'Finish the strength week with lower-body, unilateral, carrying, balance and functional work while avoiding another high-volume upper-body session.',warm:['March in place — 1 minute','Bodyweight squats — 10','Hip hinges — 10','World’s greatest stretch — 5 each side','Bird Dog — 6 each side','Ankle rocks — 10 each side'],cool:['Figure-4 glute stretch — 30 sec each side','Kneeling hip-flexor stretch — 30 sec each side','Standing calf stretch — 30 sec each side','Child’s Pose — 30–45 sec'],ex:[
{name:'Double-Dumbbell Front Squat',sets:4,reps:'6–8',rest:'90–120 sec',cue:'Brace, sit between the hips, drive through the whole foot.',alt:'Goblet Squat',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Step-Up',sets:3,reps:'8–10 each leg',rest:'75 sec',cue:'Use the lead leg and lower slowly.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Single-Leg Dumbbell Romanian Deadlift',sets:3,reps:'8 each leg',rest:'75 sec',cue:'Hinge from the hip, keep pelvis square, move under control.',alt:'Staggered-Stance RDL',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Walking Dumbbell Lunge',sets:3,reps:'8–10 each leg',rest:'75 sec',cue:'Upright torso, controlled stride, push through front foot.',alt:'Reverse Lunge',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Farmer Carry',sets:3,time:'60 sec',rest:'60 sec',cue:'Tall posture, level shoulders, smooth breathing.',equipment:'Standing Dumbbells / Carry',priority:'Primary'},
{name:'Standing Calf Raise',sets:3,reps:'15–20',rest:'30–45 sec',cue:'Rise high, pause, lower through full range.',equipment:'Standing Dumbbells',priority:'Accessory'},
{name:'Pallof Press',sets:2,reps:'10 each side',rest:'30–45 sec',cue:'Brace and resist rotation.',equipment:'Resistance Band',priority:'Accessory'},
{name:'Partial Turkish Get-Up',sets:2,reps:'3 each side',rest:'60 sec',cue:'Move step by step and keep the shoulder stable.',equipment:'Mat / Floor + Dumbbell',priority:'Accessory'},
{name:'Bird Dog',sets:2,reps:'8 each side',rest:'30 sec',cue:'Reach long and keep hips level.',equipment:'Mat / Floor',priority:'Accessory'}
]},
{day:'Sunday',kind:'recovery',focus:'Recovery: Yoga + Walking',time:'Recovery day',mission:'Use yoga and walking to restore movement quality and arrive at Monday recovered. Record multiple sessions if you do them.',warm:['No strength warm-up required.'],cool:['Finish feeling calmer and ready for the coming week.'],ex:[
{name:'Mobility / Reset Work (Optional)',sets:1,time:'5–20 min',recovery:true,optional:true,rest:'',cue:'Use only if helpful for stiffness or mobility.'}
]}
]
const KEY='strengthTrackerLocalV1';let activeDay=0;let currentExercises=[];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function isoToday(){const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10)}
function addDays(iso,days){
  const d=new Date((iso||isoToday())+'T12:00:00');
  d.setDate(d.getDate()+Number(days||0));
  return d.toISOString().slice(0,10);
}
function dayIndexFromDate(value){if(!value)return 0;const d=new Date(value+'T12:00:00');return (d.getDay()+6)%7}
function dateForDayInSameWeek(value,targetIndex){const base=new Date((value||isoToday())+'T12:00:00');const current=(base.getDay()+6)%7;base.setDate(base.getDate()+(targetIndex-current));return base.toISOString().slice(0,10)}
function records(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}}
const el=id=>document.getElementById(id);
const workoutDateEl=()=>el('workoutDate');
const daybarEl=()=>el('daybar');
const dayTitleEl=()=>el('dayTitle');
const missionEl=()=>el('mission');
const summaryEl=()=>el('summary');
const warmupEl=()=>el('warmup');
const cooldownEl=()=>el('cooldown');
const strengthQuickActionsEl=()=>el('strengthQuickActions');
const customExerciseCardEl=()=>el('customExerciseCard');
const rpeFieldEl=()=>el('rpeField');
const warmupCardEl=()=>el('warmupCard');
const cooldownCardEl=()=>el('cooldownCard');
const programLegendEl=()=>el('programLegend');
const exerciseListEl=()=>el('exerciseList');
const topCompletionTextEl=()=>el('topCompletionText');
const topCompletionBarEl=()=>el('topCompletionBar');
const completionTextEl=()=>el('completionText');
const completionBarEl=()=>el('completionBar');
const totalMinutesEl=()=>el('totalMinutes');
const rpeEl=()=>el('rpe');
const energyBeforeEl=()=>el('energyBefore');
const energyAfterEl=()=>el('energyAfter');
const notesEl=()=>el('notes');
const completionSummaryEl=()=>el('completionSummary');
const fromDateEl=()=>el('fromDate');
const toDateEl=()=>el('toDate');
const dayFilterEl=()=>el('dayFilter');
const periodFilterEl=()=>el('periodFilter');
const historyStatsEl=()=>el('historyStats');
const historyListEl=()=>el('historyList');
const chartPeriodEl=()=>el('chartPeriod');
const exerciseFilterEl=()=>el('exerciseFilter');
const consistencyChartEl=()=>el('consistencyChart');
const exerciseProgressViewEl=()=>el('exerciseProgress');
const backupStatusEl=()=>el('backupStatus');

const yogaSessionsEl=()=>el('yogaSessions');
const walkingSessionsEl=()=>el('walkingSessions');
const dailyYogaTotalEl=()=>el('dailyYogaTotal');
const dailyWalkingTotalEl=()=>el('dailyWalkingTotal');
const activityFilterEl=()=>el('activityFilter');

const dashboardStatsEl=()=>el('dashboardStats');
const weeklyTimeHistoryEl=()=>el('weeklyTimeHistory');
const dashboardPRsEl=()=>el('dashboardPRs');
function setRecords(r){localStorage.setItem(KEY,JSON.stringify(r));window.dispatchEvent(new CustomEvent('strength-records-changed',{detail:{records:r}}))}
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function optionList(values,current='',blankLabel='—'){const cur=String(current??'');const vals=[...new Set(values.map(String))];if(cur&&!vals.includes(cur))vals.unshift(cur);return `<option value="">${blankLabel}</option>`+vals.map(v=>`<option value="${esc(v)}" ${v===cur?'selected':''}>${esc(v)}</option>`).join('')}
function weightOptions(current=''){const vals=[];for(let x=0;x<=100;x+=2.5)vals.push(Number.isInteger(x)?String(x):x.toFixed(1));for(let x=105;x<=200;x+=5)vals.push(String(x));return optionList(vals,current,'— lb —')}
function repOptions(current=''){return optionList(Array.from({length:31},(_,i)=>String(i)),current,'— reps —')}
function timeOptions(current=''){const vals=[];for(let x=5;x<=120;x+=5)vals.push(String(x));[150,180,240,300,360,420,480,600].forEach(x=>vals.push(String(x)));return optionList(vals,current,'— sec —')}
function minuteOptions(current=''){const vals=[];for(let x=5;x<=120;x+=5)vals.push(String(x));[150,180].forEach(x=>vals.push(String(x)));return optionList(vals,current,'— minutes —')}
function setCountOptions(current='2'){return optionList(['1','2','3','4','5','6'],current,'— sets —')}
function nav(){ $$('.tab').forEach(b=>b.onclick=()=>{$$('.tab').forEach(x=>x.classList.toggle('active',x===b));$$('.view').forEach(v=>v.classList.toggle('active',v.id===b.dataset.view));if(b.dataset.view==='dashboard')renderDashboard();if(b.dataset.view==='history')renderHistory();if(b.dataset.view==='progress')renderProgress();}); }
function updateDateDayNotice(){const d=PROGRAM[dayIndexFromDate(workoutDateEl().value)];const n=document.getElementById('dateDayNotice');if(n)n.textContent=`Selected date is ${d.day}. The workout shown is linked automatically to this date.`;}
function renderDaybar(){updateDateDayNotice();daybarEl().innerHTML=PROGRAM.map((d,i)=>`<button class="daybtn ${i===activeDay?'active':''}" data-i="${i}"><b>${d.day}</b><span>${d.time} · ${d.ex.length} ${d.kind==='recovery'?'activities':'exercises'}</span></button>`).join('');$$('.daybtn').forEach(b=>b.onclick=()=>{const next=+b.dataset.i;workoutDateEl().value=dateForDayInSameWeek(workoutDateEl().value,next);activeDay=next;renderWorkout(true);updateDateDayNotice()});}
const EXERCISE_LIBRARY=[
'Arnold Press','Assisted Pull-Up','Band External Rotation','Band High Row','Band Lat Pulldown','Band Pull-Apart','Bear Crawl','Bird Dog','Bodyweight Squat','Bottom-Up Carry','Bulgarian Split Squat','Chest-Supported Dumbbell Row','Chin Tuck','Close-Grip Push-Up','Cossack Squat','Cross-Body Hammer Curl','Dead Bug','Double-Dumbbell Front Squat','Dumbbell Floor Press','Dumbbell Hip Thrust','Dumbbell Romanian Deadlift','Dumbbell Thruster','Farmer Carry','Farmer Carry on Toes','Glute Bridge','Glute Bridge March','Goblet Cyclist Squat','Goblet Squat','Half-Kneeling Dumbbell Press','Hammer Curl','Heel-to-Toe Walk','High Band Row','Incline Dumbbell Press','Incline Push-Up','Inverted Row','Lateral Lunge','Mini-Band Lateral Walk','Monster Walk','One-Arm Dumbbell Row','Overhead Dumbbell Triceps Extension','Overhead Carry','Pallof Press','Partial Turkish Get-Up','Plank','Plate Pinch Carry','Prone Y-T-W Raises','Pull-Up','Push-Up','Push-Up Plus','Rear Delt Fly','Renegade Row','Reverse Lunge','Reverse Snow Angel','Scapular Push-Up','Side Plank','Single-Leg Balance Reach','Single-Leg Calf Raise','Single-Leg Glute Bridge','Single-Leg Romanian Deadlift','Skater Step','Standing Band Row','Standing Calf Raise','Standing Dumbbell Overhead Press','Step-Down','Step-Up','Straight-Arm Band Pulldown','Suitcase Carry','Sumo Squat','Turkish Get-Up','Walking Dumbbell Lunge','Wall Slides','Z-Press'
];
function customExerciseOptions(selected=''){const today=new Set(PROGRAM[activeDay].ex.map(e=>e.name));const other=EXERCISE_LIBRARY.filter(n=>!today.has(n)).sort();const current=EXERCISE_LIBRARY.filter(n=>today.has(n)).sort();let html='<option value="">Select an exercise</option><optgroup label="Exercises not in today’s program">'+other.map(n=>`<option ${n===selected?'selected':''}>${esc(n)}</option>`).join('')+'</optgroup>';if(current.length)html+='<optgroup label="Already in today’s program">'+current.map(n=>`<option ${n===selected?'selected':''}>${esc(n)}</option>`).join('')+'</optgroup>';html+='<option value="__other__">Other — enter manually</option>';return html}
function refreshCustomSelectors(){document.querySelectorAll('.custom-form').forEach(form=>{const sel=form.querySelector('.customExercise'),chosen=sel.value;sel.innerHTML=customExerciseOptions(chosen);if(chosen&&[...sel.options].some(o=>o.value===chosen))sel.value=chosen;toggleManualName(form)})}
function toggleManualName(form){const isOther=form.querySelector('.customExercise').value==='__other__';form.querySelector('.manual-name').hidden=!isOther;if(!isOther)form.querySelector('.customName').value=''}
function baseExercises(){return PROGRAM[activeDay].ex.map((e,i)=>({...e,id:`base-${i}`,custom:false,complete:false,originalName:e.name,originalPrescription:{sets:e.sets,reps:e.reps||'',time:e.time||'',rest:e.rest||'',cue:e.cue||'',alt:e.alt||'',typeLabel:e.typeLabel||'',typeOptions:e.typeOptions||[],equipment:e.equipment||'',priority:e.priority||''},selectedType:e.selectedType||'',substitutedFor:'',setData:Array.from({length:e.sets},()=>({weight:'',reps:'',time:'',minutes:'',notes:''}))}))}

function setHasData(s){return Boolean(String(s?.weight||'').trim()||String(s?.reps||'').trim()||String(s?.time||'').trim()||String(s?.minutes||'').trim())}
function exerciseProgress(e){if(e.recovery){const performed=Boolean(e.complete||(e.setData||[]).some(setHasData));if(e.optional&&!performed)return {done:0,total:0,percent:0};return {done:performed?1:0,total:1,percent:performed?100:0}}const total=Math.max(1,e.setData?.length||e.sets||1);const done=e.complete?total:(e.setData||[]).filter(setHasData).length;return {done:Math.min(done,total),total,percent:Math.round(Math.min(done,total)/total*100)}}
function programProgress(r){const ex=(r?.exercises||[]).filter(e=>!e.custom);const total=ex.reduce((n,e)=>n+exerciseProgress(e).total,0);const done=ex.reduce((n,e)=>n+exerciseProgress(e).done,0);return {done,total,percent:total?Math.round(done/total*100):0}}
function additionalWork(r){const ex=(r?.exercises||[]).filter(e=>e.custom);const done=ex.reduce((n,e)=>n+exerciseProgress(e).done,0);const entered=ex.reduce((n,e)=>n+exerciseProgress(e).total,0);return {done,entered}}
function primaryProgress(r){const ex=(r?.exercises||[]).filter(e=>!e.custom&&!e.recovery&&e.priority==='Primary');const total=ex.reduce((n,e)=>n+exerciseProgress(e).total,0);const done=ex.reduce((n,e)=>n+exerciseProgress(e).done,0);return {done,total,percent:total?Math.round(done/total*100):0}}
function workoutProgress(r){return programProgress(r)}
function fullyCompleted(r){return workoutProgress(r).percent===100}
function hasWorkoutProgress(r){return workoutProgress(r).done>0}
function previousRecordFor(name){return records().filter(r=>r.date<workoutDateEl().value).sort((a,b)=>b.date.localeCompare(a.date)).flatMap(r=>r.exercises.filter(e=>e.name===name&&exerciseProgress(e).done>0).map(e=>({date:r.date,e}))).find(Boolean)}
function previousPerformance(name){const p=previousRecordFor(name);if(!p)return '';return `<div class="previous"><b>Last completed ${p.date}:</b> ${bestSummary(p.e)}</div>`}
function markEveryExercise(value){currentExercises.forEach(e=>e.complete=value);renderExercises();updateCompletion()}
function dateDiffDays(a,b){return Math.round((new Date(b+'T12:00:00')-new Date(a+'T12:00:00'))/86400000)}
function streakStats(){const dates=[...new Set(records().filter(hasWorkoutProgress).map(r=>r.date))].sort();if(!dates.length)return {current:0,longest:0};let longest=1,run=1;for(let i=1;i<dates.length;i++){if(dateDiffDays(dates[i-1],dates[i])===1)run++;else run=1;longest=Math.max(longest,run)}let current=0;const desc=[...dates].sort().reverse();const today=isoToday();if(desc[0]===today||dateDiffDays(desc[0],today)===1){current=1;for(let i=1;i<desc.length;i++){if(dateDiffDays(desc[i],desc[i-1])===1)current++;else break}}return {current,longest}}
function monthKey(d){return d.slice(0,7)}
function personalBests(limit=6){
  const best={};
  (records()||[]).forEach(r=>{
    (r.exercises||[]).forEach(e=>{
      if(e?.recovery) return;
      (Array.isArray(e?.setData)?e.setData:[]).forEach(s=>{
        if(!setHasData(s)) return;
        const w=parseFloat(s.weight)||0;
        const rep=parseFloat(s.reps)||0;
        const t=parseFloat(s.time)||0;
        if(!w&&!rep&&!t) return;
        const score=w ? (100000000+w*10000+rep) : t ? (50000000+t) : rep;
        const name=e.name||'Exercise';
        const cur=best[name];
        if(!cur||score>cur.score){
          best[name]={name,date:r.date||'',w,rep,t,score};
        }
      });
    });
  });
  return Object.values(best)
    .sort((a,b)=>(b.date||'').localeCompare(a.date||''))
    .slice(0,limit);
}


function normalizeActivities(r){
  const a=r?.activities||{};
  return {
    yoga:Array.isArray(a.yoga)?a.yoga:[],
    walking:Array.isArray(a.walking)?a.walking:[]
  };
}
function yogaTypes(){
  return ['Gentle Vinyasa Yoga','Power Yoga','Hatha / General Yoga','Restorative Yoga','Yin Yoga','Restorative Yin Yoga','Gentle Yin Yoga','Other Yoga'];
}
function activityMinuteOptions(value=''){
  const current=String(value??'');
  const vals=[];
  for(let m=5;m<=180;m+=5)vals.push(String(m));
  if(current&&!vals.includes(current))vals.push(current);
  vals.sort((a,b)=>Number(a)-Number(b));
  return `<option value="">Minutes</option>${vals.map(v=>`<option value="${v}" ${v===current?'selected':''}>${v} min</option>`).join('')}`;
}
function yogaMinutesForRecord(r){return normalizeActivities(r).yoga.reduce((n,s)=>n+(parseFloat(s.minutes)||0),0)}
function walkingMinutesForRecord(r){return normalizeActivities(r).walking.reduce((n,s)=>n+(parseFloat(s.minutes)||0),0)}
function legacyRecoveryMinutes(r){
  let yoga=0,walking=0;
  (r?.exercises||[]).forEach(e=>{
    if(!e?.recovery)return;
    const m=parseFloat(e?.setData?.[0]?.minutes)||0;
    const name=(e.name||'').toLowerCase();
    if(name.includes('walk'))walking+=m;
    else if(name.includes('yoga'))yoga+=m;
  });
  return {yoga,walking};
}
function recordYogaMinutes(r){const direct=yogaMinutesForRecord(r);return direct||legacyRecoveryMinutes(r).yoga}
function recordWalkingMinutes(r){const direct=walkingMinutesForRecord(r);return direct||legacyRecoveryMinutes(r).walking}

function activitySessionHTML(kind,session={}){
  if(kind==='yoga'){
    const opts=yogaTypes().map(t=>`<option value="${esc(t)}" ${session.type===t?'selected':''}>${esc(t)}</option>`).join('');
    return `<div class="activity-session" data-kind="yoga">
      <label>Yoga type<select class="activityType">${opts}</select></label>
      <label>Duration<select class="activityMinutes">${activityMinuteOptions(session.minutes||'')}</select></label>
      <button type="button" class="secondary remove-activity">Remove</button>
    </div>`;
  }
  const walkTypes=['Walking','Easy Walking','Brisk Walking','Other Walking'];
  const opts=walkTypes.map(t=>`<option value="${t}" ${session.type===t?'selected':''}>${t}</option>`).join('');
  return `<div class="activity-session" data-kind="walking">
    <label>Walking type<select class="activityType">${opts}</select></label>
    <label>Duration<select class="activityMinutes">${activityMinuteOptions(session.minutes||'')}</select></label>
    <button type="button" class="secondary remove-activity">Remove</button>
  </div>`;
}
function readActivityUI(){
  const out={yoga:[],walking:[]};
  document.querySelectorAll('.activity-session').forEach(row=>{
    const kind=row.dataset.kind;
    if(kind!=='yoga'&&kind!=='walking')return;
    const type=row.querySelector('.activityType')?.value||'';
    const minutes=parseFloat(row.querySelector('.activityMinutes')?.value)||0;
    if(minutes>0)out[kind].push({type,minutes});
  });
  return out;
}
function updateDailyActivityTotals(){
  const a=readActivityUI();
  if(dailyYogaTotalEl())dailyYogaTotalEl().textContent=`${a.yoga.reduce((n,s)=>n+s.minutes,0)} min`;
  if(dailyWalkingTotalEl())dailyWalkingTotalEl().textContent=`${a.walking.reduce((n,s)=>n+s.minutes,0)} min`;
}
function bindActivityRows(){
  document.querySelectorAll('.activity-session').forEach(row=>{
    row.querySelectorAll('select').forEach(node=>{
      node.onchange=()=>{updateDailyActivityTotals();scheduleAutoSave()};
    });
    const btn=row.querySelector('.remove-activity');
    if(btn)btn.onclick=()=>{row.remove();updateDailyActivityTotals();scheduleAutoSave()};
  });
}
function renderDailyActivities(rec=null){
  const a=normalizeActivities(rec);
  if(yogaSessionsEl())yogaSessionsEl().innerHTML=a.yoga.map(s=>activitySessionHTML('yoga',s)).join('');
  if(walkingSessionsEl())walkingSessionsEl().innerHTML=a.walking.map(s=>activitySessionHTML('walking',s)).join('');
  bindActivityRows();updateDailyActivityTotals();
}
function addActivitySession(kind){
  const host=kind==='yoga'?yogaSessionsEl():walkingSessionsEl();
  if(!host)return;
  host.insertAdjacentHTML('beforeend',activitySessionHTML(kind,kind==='yoga'?{type:'Gentle Vinyasa Yoga'}:{type:'Walking'}));
  bindActivityRows();updateDailyActivityTotals();
}

function recordTrainingMinutes(r){
 const isRecovery=r?.kind==='recovery'||r?.day==='Thursday'||r?.day==='Sunday';
 const strength=isRecovery?0:(parseFloat(r?.totalMinutes)||0);
 return {strength,recovery:recordYogaMinutes(r)+recordWalkingMinutes(r)};
}
function weeklyTrainingTimeRows(count=12){
 const current=weekStart(isoToday()),rows=[];
 for(let i=0;i<count;i++){
   const start=addDays(current,-7*i),end=addDays(start,6);
   const rs=(records()||[]).filter(r=>r?.date>=start&&r?.date<=end);
   rows.push({
     start,end,current:i===0,
     strength:rs.reduce((n,r)=>n+(r?.kind==='recovery'?0:(parseFloat(r?.totalMinutes)||0)),0),
     yoga:rs.reduce((n,r)=>n+recordYogaMinutes(r),0),
     walking:rs.reduce((n,r)=>n+recordWalkingMinutes(r),0),
     hasData:rs.length>0
   });
 }
 return rows;
}
function renderWeeklyTrainingTimeHistory(){
 const box=weeklyTimeHistoryEl();if(!box)return;
 const rows=weeklyTrainingTimeRows(12);
 box.innerHTML=`<div class="weekly-time-list">${rows.map(r=>`<div class="weekly-time-row ${r.current?'current':''}"><div class="weekly-time-dates"><b>${r.current?'Current week':'Week of '+r.start}</b><small>${r.start} – ${r.end}</small></div><div class="weekly-time-breakdown">${r.hasData?`<div><span>Strength</span><b>${r.strength} min</b></div><div><span>Yoga</span><b>${r.yoga} min</b></div><div><span>Walking</span><b>${r.walking} min</b></div>`:`<small>No activity logged</small>`}</div></div>`).join('')}</div>`;
}
function renderDashboard(){
  const status=el('dashboardDataStatus');

  try{
    const all=records()||[];
    const today=isoToday();
    const ws=weekStart(today);
    const we=addDays(ws,6);
    const month=monthKey(today);
    const weekRecords=all.filter(r=>r?.date>=ws&&r?.date<=we);
    const monthRecords=all.filter(r=>r?.date&&monthKey(r.date)===month);
    const st=streakStats();

    const currentMins=weekRecords.map(recordTrainingMinutes);
    const strengthMinutes=currentMins.reduce((n,m)=>n+(Number(m.strength)||0),0);
    const yogaMinutes=weekRecords.reduce((n,r)=>n+recordYogaMinutes(r),0);
    const walkingMinutes=weekRecords.reduce((n,r)=>n+recordWalkingMinutes(r),0);

    const aggregate=list=>{
      const total=list.reduce((n,r)=>n+workoutProgress(r).total,0);
      const done=list.reduce((n,r)=>n+workoutProgress(r).done,0);
      return {done,total,percent:total?Math.round(done/total*100):0};
    };
    const wp=aggregate(weekRecords),mp=aggregate(monthRecords);
    const weekExtra=weekRecords.reduce((n,r)=>n+additionalWork(r).done,0);
    const monthExtra=monthRecords.reduce((n,r)=>n+additionalWork(r).done,0);
    const setText=(id,value)=>{const node=el(id);if(node)node.textContent=value};

    setText('dashWeekCompletion',`${wp.percent}%`);
    setText('dashWeekCompletionDetail',`${wp.done}/${wp.total||0} prescribed sets${weekExtra?` · +${weekExtra} extra sets`:''}`);
    setText('dashMonthCompletion',`${mp.percent}%`);
    setText('dashMonthCompletionDetail',`${mp.done}/${mp.total||0} prescribed sets${monthExtra?` · +${monthExtra} extra sets`:''}`);
    setText('dashStreak',`${st.current} days`);
    setText('dashStrengthMinutes',`${strengthMinutes} min`);
    setText('dashYogaMinutes',`${yogaMinutes} min`);
    setText('dashWalkingMinutes',`${walkingMinutes} min`);

    if(status){
      const details=weekRecords.map(r=>`${r.day||''} ${r.date}: ${r.totalMinutes||0} min`).join(' · ');
      status.textContent=weekRecords.length
        ? `${weekRecords.length} saved session${weekRecords.length===1?'':'s'} found for ${ws}–${we}.${details?` ${details}`:''}`
        : `No saved sessions found for ${ws}–${we}.`;
    }
  }catch(err){
    console.error('Dashboard totals failed',err);
    if(status)status.textContent=`Dashboard totals error: ${err.message}`;
  }

  try{
    renderWeeklyTrainingTimeHistory();
  }catch(err){
    console.error('Weekly training time history failed',err);
    const box=weeklyTimeHistoryEl();
    if(box)box.innerHTML=`<div class="empty">Weekly history error: ${esc(err.message)}</div>`;
  }

  try{
    const prs=personalBests();
    const box=dashboardPRsEl();
    if(box){
      box.innerHTML=prs.length
        ? prs.map(p=>`<div class="pr-card"><b>${esc(p.name)}</b><span>${p.w?`${p.w} lb${p.rep?` × ${p.rep} reps`:''}`:p.t?`${p.t} sec`:p.rep?`${p.rep} reps`:'Recorded'} · ${p.date}</span></div>`).join('')
        : '<div class="empty">No personal-best data yet. Saved weight/repetition or timed-set entries will appear here.</div>';
    }
  }catch(err){
    console.error('Personal bests failed',err);
    const box=dashboardPRsEl();
    if(box)box.innerHTML=`<div class="empty">Personal bests error: ${esc(err.message)}</div>`;
  }
}


function substitutionOptions(selected=''){
  const originalNames=new Set(PROGRAM[activeDay].ex.map(e=>e.name));
  const choices=EXERCISE_LIBRARY.filter(n=>!originalNames.has(n)).sort();
  let html='<option value="">Select a replacement</option>';
  html+=choices.map(n=>`<option value="${esc(n)}" ${n===selected?'selected':''}>${esc(n)}</option>`).join('');
  html+='<option value="__other__">Other — enter manually</option>';
  return html;
}
function applySubstitution(e,card){
  const sel=card.querySelector('.sub-select');
  const manual=card.querySelector('.sub-manual-input');
  const selected=sel.value;
  const replacement=selected==='__other__' ? manual.value.trim() : selected;
  if(!replacement){alert(selected==='__other__'?'Enter the replacement exercise name.':'Select a replacement exercise.');return;}
  if(!e.originalName)e.originalName=e.substitutedFor||e.name;
  if(!e.originalPrescription)e.originalPrescription={sets:e.setData?.length||e.sets||1,reps:e.reps||'',time:e.time||'',rest:e.rest||'',cue:e.cue||'',alt:e.alt||'',equipment:e.equipment||'',priority:e.priority||''};
  e.substitutedFor=e.originalName;
  e.name=replacement;
  e.cue='Perform the replacement with controlled technique and record any variation details in Notes.';
  e.alt=`Replacement for ${e.originalName}. Completed replacement sets count toward today’s programmed work.`;
  renderExercises();updateCompletion();
}
function restoreOriginal(e){
  if(!e.originalName)return;
  const p=e.originalPrescription||{};
  e.name=e.originalName;
  e.reps=p.reps||'';e.time=p.time||'';e.rest=p.rest||'';e.cue=p.cue||'';e.alt=p.alt||'';e.equipment=p.equipment||e.equipment||'';e.priority=p.priority||e.priority||'';
  e.substitutedFor='';
  renderExercises();updateCompletion();
}
function displayExerciseName(e){return e.substitutedFor?`${e.name} (substituted for ${e.substitutedFor})`:e.name}
function normalizeSavedExercises(saved){
  const bases=baseExercises();
  if(!Array.isArray(saved)||saved.length===0)return bases;
  const used=new Set();
  const merged=bases.map((base,i)=>{
    const found=saved.find((x,j)=>!used.has(j)&&!x.custom&&(x.originalName===base.name||(!x.substitutedFor&&x.name===base.name)||(x.id===base.id&&(x.originalName===base.name||x.name===base.name))));
    if(!found)return base;
    const j=saved.indexOf(found);used.add(j);
    const mergedItem={...base,...found,id:base.id,custom:false,originalName:base.name,originalPrescription:base.originalPrescription};
    if(!Array.isArray(mergedItem.setData)||mergedItem.setData.length===0)mergedItem.setData=base.setData;
    return mergedItem;
  });
  saved.forEach((x,j)=>{if(x.custom&&!used.has(j))merged.push(x)});
  return merged;
}

function renderWorkout(reset=true){const d=PROGRAM[activeDay],isRecovery=d.kind==='recovery';dayTitleEl().textContent=`${d.day} — ${d.focus}`;missionEl().textContent=d.mission;summaryEl().innerHTML=`<span class="pill">${d.time}</span><span class="pill">${d.ex.length} ${isRecovery?'recovery activities':'programmed exercises'}</span><span class="pill">${isRecovery?'Activity tracking':'Set-level tracking'}</span>`;warmupEl().innerHTML=d.warm.map(x=>`<li>${esc(x)}</li>`).join('');cooldownEl().innerHTML=d.cool.map(x=>`<li>${esc(x)}</li>`).join('');strengthQuickActionsEl().hidden=isRecovery;customExerciseCardEl().hidden=isRecovery;rpeFieldEl().hidden=isRecovery;warmupCardEl().hidden=isRecovery;cooldownCardEl().hidden=isRecovery;if(programLegendEl())programLegendEl().hidden=isRecovery;renderDaybar();if(!isRecovery)refreshCustomSelectors();if(reset){currentExercises=baseExercises();clearSessionFields()}renderExercises();renderDailyActivities(null);updateCompletion();loadSaved(false)}
function updateRecoveryTotalMinutes(){if(PROGRAM[activeDay].kind!=='recovery')return;const total=currentExercises.reduce((n,e)=>n+(parseFloat(e.setData?.[0]?.minutes)||0),0);if(totalMinutesEl().value!==String(total||''))totalMinutesEl().value=total||''}
function renderExercises(){let html='',lastGroup='';currentExercises.forEach((e,i)=>{const group=e.custom?'Additional Work':(e.recovery?'Recovery Activities':(e.equipment||'Other'));if(group!==lastGroup){html+=`<div class="equipment-block-header ${e.custom?'additional-block':''}"><div><b>${esc(group)}</b>${!e.custom&&!e.recovery?'<span>Work through this station before moving on.</span>':''}</div></div>`;lastGroup=group}html+=exerciseHTML(e,i)});exerciseListEl().innerHTML=html;$$('.exercise').forEach((card,i)=>{const e=currentExercises[i];card.querySelector('.donecheck').onchange=ev=>{e.complete=ev.target.checked;card.classList.toggle('done',e.complete);updateCompletion();scheduleAutoSave()};if(e.recovery){const minutes=card.querySelector('.minutes'),notes=card.querySelector('.notes'),typeSel=card.querySelector('.activityType');if(minutes){const handler=ev=>{e.setData[0].minutes=ev.target.value;updateRecoveryTotalMinutes();updateCompletion();scheduleAutoSave()};minutes.oninput=handler;minutes.onchange=handler}if(notes)notes.oninput=ev=>{e.setData[0].notes=ev.target.value;scheduleAutoSave()};if(typeSel)typeSel.onchange=ev=>{e.selectedType=ev.target.value;updateCompletion();scheduleAutoSave()};return}card.querySelectorAll('.setrow').forEach((row,si)=>{['weight','reps','time','notes'].forEach(k=>{const el=row.querySelector('.'+k);const handler=ev=>{e.setData[si][k]=ev.target.value;updateCompletion();scheduleAutoSave()};el.oninput=handler;el.onchange=handler})});const typeSel=card.querySelector('.activityType');if(typeSel)typeSel.onchange=ev=>{e.selectedType=ev.target.value;scheduleAutoSave()};card.querySelector('.addset').onclick=()=>{e.setData.push({weight:'',reps:'',time:'',minutes:'',notes:''});renderExercises();updateCompletion();scheduleAutoSave()};card.querySelector('.removeset').onclick=()=>{if(e.setData.length>1)e.setData.pop();renderExercises();updateCompletion();scheduleAutoSave()};const del=card.querySelector('.deleteExercise');if(del)del.onclick=()=>{currentExercises.splice(i,1);renderExercises();updateCompletion();scheduleAutoSave()};const subBtn=card.querySelector('.substituteExercise');if(subBtn){const panel=card.querySelector('.sub-panel'),sel=card.querySelector('.sub-select'),manualWrap=card.querySelector('.sub-manual'),manual=card.querySelector('.sub-manual-input');subBtn.onclick=()=>{panel.classList.toggle('show');if(panel.classList.contains('show'))sel.focus()};sel.onchange=()=>{manualWrap.hidden=sel.value!=='__other__';if(sel.value==='__other__')manual.focus()};card.querySelector('.applySub').onclick=()=>{applySubstitution(e,card);scheduleAutoSave()};card.querySelector('.cancelSub').onclick=()=>panel.classList.remove('show');const restore=card.querySelector('.restoreExercise');if(restore)restore.onclick=()=>{restoreOriginal(e);scheduleAutoSave()}}})}
function activityTypeControl(e){if(!e.typeOptions?.length)return '';const opts=optionList(e.typeOptions,e.selectedType||'',`— select ${e.typeLabel||'type'} —`);return `<div class="activity-type"><label>${esc(e.typeLabel||'Activity type')}</label><select class="activityType">${opts}</select></div>`}
function recoveryExerciseHTML(e,i){const s=e.setData?.[0]||{minutes:'',notes:''};return `<article class="exercise recovery-card ${e.complete?'done':''}"><div class="exercise-head"><div class="num">${i+1}</div><div><h3>${esc(e.name)}</h3><div class="rx">${e.optional?'Optional activity':'Planned recovery activity'}${e.time?' · '+esc(e.time):''}</div></div><div><label class="check"><input class="donecheck" type="checkbox" ${e.complete?'checked':''}> Completed</label><div class="exercise-progress">${exerciseProgress(e).percent}%</div></div></div><div class="cuebox"><h4>Guidance</h4><p>${esc(e.cue||'Choose a comfortable, restorative effort.')}</p></div>${activityTypeControl(e)}<div class="recovery-fields"><div><label>Duration (minutes)</label><select class="minutes">${minuteOptions(s.minutes||s.time||'')}</select></div><div class="wide"><label>Notes</label><input class="notes" value="${esc(s.notes||'')}" placeholder="How it felt, focus, route, or modifications"></div></div></article>`}
function exerciseHTML(e,i){if(e.recovery)return recoveryExerciseHTML(e,i);const setRows=e.setData.map((s,si)=>`<div class="setrow"><b>${si+1}</b><select class="weight">${weightOptions(s.weight)}</select><select class="reps">${repOptions(s.reps)}</select><select class="time">${timeOptions(s.time)}</select><input class="notes" value="${esc(s.notes)}" placeholder="notes / band"></div>`).join('');return `<article class="exercise ${e.complete?'done':''}"><div class="exercise-head"><div class="num">${i+1}</div><div><h3>${esc(e.name)}</h3><div class="exercise-badges">${e.priority?`<span class="priority-badge ${e.priority==='Primary'?'primary-priority':'accessory-priority'}">${esc(e.priority)}</span>`:''}${e.equipment?`<span class="equipment-badge">${esc(e.equipment)}</span>`:''}</div>${e.substitutedFor?`<div class="sub-badge">Substituted for ${esc(e.substitutedFor)}</div>`:''}<div class="rx">${e.setData.length} sets${e.reps?' · '+esc(e.reps):''}${e.time?' · '+esc(e.time):''}${e.rest?' · rest '+esc(e.rest):''}</div></div><div><label class="check"><input class="donecheck" type="checkbox" ${e.complete?'checked':''}> Mark all sets complete</label><div class="exercise-progress">${exerciseProgress(e).done}/${exerciseProgress(e).total} sets · ${exerciseProgress(e).percent}%</div></div></div><div class="exercise-grid"><div class="cuebox"><h4>Technique cue</h4><p>${esc(e.cue||'Use controlled repetitions and good form.')}</p></div><div class="cuebox"><h4>Alternative / note</h4><p>${esc(e.alt|| (e.custom?'Custom exercise':'Use the prescribed variation unless a substitution is needed.'))}</p></div></div>${activityTypeControl(e)}${!e.custom?`<div class="actions"><button class="small substituteExercise">${e.substitutedFor?'Change substitution':'Substitute exercise'}</button>${e.substitutedFor?'<button class="small restoreExercise">Restore original exercise</button>':''}</div><div class="sub-panel"><div class="sub-grid"><div><label>Replacement exercise</label><select class="sub-select">${substitutionOptions(e.substitutedFor?e.name:'')}</select></div><div class="sub-manual" hidden><label>Other exercise</label><input class="sub-manual-input" placeholder="Enter replacement name"></div><button class="small applySub">Apply substitution</button><button class="small cancelSub">Cancel</button></div><p class="muted">The replacement uses the same scheduled set slots, so completed sets receive full credit toward today’s workout. You may add or remove sets afterward.</p></div>`:''}<div class="sets"><div class="setlabels"><span>Set</span><span>Weight</span><span>Reps</span><span>Time</span><span>Notes</span></div>${setRows}<div class="setactions"><button class="small addset">+ Set</button><button class="small removeset">− Set</button>${e.custom?'<button class="small danger deleteExercise">Delete exercise</button>':''}</div></div></article>`}
function updateCompletion(){const p=programProgress({exercises:currentExercises}),extra=additionalWork({exercises:currentExercises}),primary=primaryProgress({exercises:currentExercises}),isRecovery=PROGRAM[activeDay].kind==='recovery';completionBarEl().style.width=p.percent+'%';completionTextEl().textContent=isRecovery?`${p.done} of ${p.total} planned recovery activities completed (${p.percent}%). Optional activities add information without lowering the percentage.`:`Program completion: ${p.done} of ${p.total} prescribed sets (${p.percent}%).${primary.total?` Primary work: ${primary.done}/${primary.total} sets (${primary.percent}%).`:''}${extra.done?` Additional work: ${extra.done} extra set${extra.done===1?'':'s'} performed.`:''}`;if(window.topCompletionBar)topCompletionBarEl().style.width=p.percent+'%';if(window.topCompletionText)topCompletionTextEl().textContent=isRecovery?`${p.done} of ${p.total} activities · ${p.percent}%`:`Program ${p.done}/${p.total} · ${p.percent}%${primary.total?` · Primary ${primary.percent}%`:''}${extra.done?` · +${extra.done} extra`:''}`;document.querySelectorAll('.exercise').forEach((card,i)=>{const ep=exerciseProgress(currentExercises[i]);const label=card.querySelector('.exercise-progress');if(label)label.textContent=currentExercises[i].recovery?`${ep.percent}% complete`:`${ep.done}/${ep.total} sets · ${ep.percent}%`;card.classList.toggle('done',ep.percent===100)})}
function clearSessionFields(){totalMinutesEl().value='';rpeEl().value='';energyBeforeEl().value='';energyAfterEl().value='';notesEl().value=''}
function recordId(day,date){return `${date}-${day}`}
function collect(){const d=PROGRAM[activeDay],date=workoutDateEl().value;return{id:recordId(d.day,date),date,day:d.day,kind:d.kind,focus:d.focus,plannedCount:d.ex.length,totalMinutes:totalMinutesEl().value,activities:readActivityUI(),rpe:rpeEl().value,energyBefore:energyBeforeEl().value,energyAfter:energyAfterEl().value,notes:notesEl().value,updatedAt:new Date().toISOString(),exercises:currentExercises.map(e=>({...e,setData:e.setData.map(s=>({...s}))}))}}
let autoSaveTimer=null;function meaningfulCurrentSession(){
 const a=readActivityUI(),hasActivity=a.yoga.length>0||a.walking.length>0;
 return hasActivity||currentExercises.some(e=>e.complete||e.selectedType||(e.setData||[]).some(setHasData))||totalMinutesEl().value||energyBeforeEl().value||energyAfterEl().value||notesEl().value.trim()
}
function saveSilently(){if(!workoutDateEl().value||!meaningfulCurrentSession())return null;const rec=collect(),all=records(),idx=all.findIndex(x=>x.id===rec.id);if(idx>=0)all[idx]=rec;else all.push(rec);setRecords(all);renderDashboard();return rec}
function scheduleAutoSave(){clearTimeout(autoSaveTimer);autoSaveTimer=setTimeout(()=>{const rec=saveSilently();if(rec){completionSummaryEl().textContent='Saved automatically';completionSummaryEl().classList.add('show');setTimeout(()=>completionSummaryEl().classList.remove('show'),1400)}},650)}
function save(){if(!workoutDateEl().value)return alert('Choose a date.');const rec=collect(),all=records(),idx=all.findIndex(x=>x.id===rec.id);if(idx>=0)all[idx]=rec;else all.push(rec);setRecords(all);renderDashboard();alert('Daily activity saved locally.');}
function loadSaved(show=true){const d=PROGRAM[activeDay],rec=records().find(x=>x.id===recordId(d.day,workoutDateEl().value));if(!rec){if(show)alert('No saved workout for this day and date.');return}currentExercises=normalizeSavedExercises(rec.exercises);totalMinutesEl().value=rec.totalMinutes||'';rpeEl().value=rec.rpe||'';energyBeforeEl().value=rec.energyBefore||'';energyAfterEl().value=rec.energyAfter||'';notesEl().value=rec.notes||'';renderExercises();renderDailyActivities(rec);updateCompletion();if(show)alert('Saved workout loaded.');}
function clearForm(){if(!confirm('Clear the current unsaved form?'))return;currentExercises=baseExercises();clearSessionFields();renderExercises();renderDailyActivities(null);updateCompletion()}
function addCustomExercise(form){const selected=form.querySelector('.customExercise').value;const manual=form.querySelector('.customName').value.trim();const name=selected==='__other__'?manual:selected;if(!name)return alert(selected==='__other__'?'Enter an exercise name.':'Select an exercise.');const setsEl=form.querySelector('.customSets'),weightEl=form.querySelector('.customWeight'),repsEl=form.querySelector('.customReps'),timeEl=form.querySelector('.customTime');const n=Math.max(1,+setsEl.value||1),weight=weightEl.value||'';currentExercises.push({id:'custom-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),custom:true,name,sets:n,reps:repsEl.value?repsEl.value:'',time:timeEl.value?timeEl.value+' sec':'',rest:'',cue:'Additional exercise — record the variation and form notes as needed.',complete:false,setData:Array.from({length:n},()=>({weight,reps:repsEl.value||'',time:timeEl.value||'',notes:''}))});form.querySelector('.customExercise').value='';form.querySelector('.customName').value='';form.querySelector('.manual-name').hidden=true;setsEl.value='2';weightEl.value='';repsEl.value='';timeEl.value='';renderExercises();renderDailyActivities(rec);updateCompletion();}
function weekStart(date){const d=new Date(date+'T12:00:00'),day=(d.getDay()+6)%7;d.setDate(d.getDate()-day);return d.toISOString().slice(0,10)}
function monthStart(){const d=new Date();return new Date(d.getFullYear(),d.getMonth(),1).toISOString().slice(0,10)}
function filtered(){
 let list=[...(records()||[])];
 const from=fromDateEl()?.value||'',to=toDateEl()?.value||'',day=dayFilterEl()?.value||'';
 const period=periodFilterEl()?.value||'all',activity=activityFilterEl()?.value||'all';
 if(from)list=list.filter(r=>r.date>=from);
 if(to)list=list.filter(r=>r.date<=to);
 if(day)list=list.filter(r=>r.day===day);
 const today=isoToday();
 if(period==='week'){const s=weekStart(today),e=addDays(s,6);list=list.filter(r=>r.date>=s&&r.date<=e)}
 if(period==='month')list=list.filter(r=>monthKey(r.date)===monthKey(today));
 if(period==='12weeks'){const s=addDays(weekStart(today),-77);list=list.filter(r=>r.date>=s)}
 if(activity==='strength')list=list.filter(r=>(parseFloat(r.totalMinutes)||0)>0 && r.kind!=='recovery');
 if(activity==='yoga')list=list.filter(r=>recordYogaMinutes(r)>0);
 if(activity==='walking')list=list.filter(r=>recordWalkingMinutes(r)>0);
 return list.sort((a,b)=>(b.date||'').localeCompare(a.date||''));
}
function renderHistory(){
 const list=filtered();
 const strength=list.reduce((n,r)=>n+(r.kind==='recovery'?0:(parseFloat(r.totalMinutes)||0)),0);
 const yoga=list.reduce((n,r)=>n+recordYogaMinutes(r),0);
 const walking=list.reduce((n,r)=>n+recordWalkingMinutes(r),0);
 const done=list.reduce((n,r)=>n+workoutProgress(r).done,0);
 const planned=list.reduce((n,r)=>n+workoutProgress(r).total,0);
 const avg=planned?Math.round(done/planned*100):0;
 historyStatsEl().innerHTML=`<div class="stat"><span>Days logged</span><b>${list.length}</b></div><div class="stat"><span>Strength</span><b>${strength} min</b></div><div class="stat"><span>Yoga</span><b>${yoga} min</b></div><div class="stat"><span>Walking</span><b>${walking} min</b></div><div class="stat"><span>Program completion</span><b>${avg}%</b></div>`;
 historyListEl().innerHTML=list.length?list.map(r=>{
   const p=workoutProgress(r),ym=recordYogaMinutes(r),wm=recordWalkingMinutes(r),sm=r.kind==='recovery'?0:(parseFloat(r.totalMinutes)||0);
   const yogaDetail=normalizeActivities(r).yoga.map(s=>`${esc(s.type)} ${s.minutes} min`).join(' · ');
   const walkDetail=normalizeActivities(r).walking.map(s=>`${esc(s.type)} ${s.minutes} min`).join(' · ');
   const performed=(r.exercises||[]).filter(e=>exerciseProgress(e).done>0&&!e.recovery);
   return `<div class="history-item">
    <div class="history-head"><div><h3>${esc(r.day)} · ${r.date}</h3><div class="history-meta">${sm?`Strength ${sm} min`:''}${ym?`${sm?' · ':''}Yoga ${ym} min`:''}${wm?`${sm||ym?' · ':''}Walking ${wm} min`:''}</div></div><div class="history-actions"><button class="small" onclick="openRecord('${r.id}')">Open</button><button class="small danger" onclick="deleteRecord('${r.id}')">Delete</button></div></div>
    ${performed.length?`<div class="completed-list">${performed.map(e=>{const ep=exerciseProgress(e);return `<div><b>${esc(displayExerciseName(e))}</b> — ${ep.done}/${ep.total} sets (${ep.percent}%) · ${bestSummary(e)}</div>`}).join('')}</div>`:''}
    ${yogaDetail?`<p><b>Yoga:</b> ${yogaDetail}</p>`:''}
    ${walkDetail?`<p><b>Walking:</b> ${walkDetail}</p>`:''}
    ${r.notes?`<p><b>Notes:</b> ${esc(r.notes)}</p>`:''}
   </div>`;
 }).join(''):'<div class="card empty">No activity matches these filters.</div>';
}
function bestSummary(e){const vals=e.setData.filter(s=>s.weight||s.reps||s.time||s.minutes).map(s=>[s.weight&&`${s.weight} lb`,s.reps&&`${s.reps} reps`,s.minutes&&`${s.minutes} min`,s.time&&`${s.time} sec`].filter(Boolean).join(' · '));return vals.length?vals.join(' | '):'marked complete'}
window.openRecord=id=>{const rec=records().find(x=>x.id===id);activeDay=PROGRAM.findIndex(d=>d.day===rec.day);workoutDateEl().value=rec.date;$$('.tab').forEach(b=>b.classList.toggle('active',b.dataset.view==='workout'));$$('.view').forEach(v=>v.classList.toggle('active',v.id==='workout'));renderWorkout(true);loadSaved(false);window.scrollTo({top:0,behavior:'smooth'})}
window.deleteRecord=id=>{if(!confirm('Delete this workout record?'))return;setRecords(records().filter(x=>x.id!==id));renderHistory()}
function exerciseNames(){const set=new Set();records().forEach(r=>r.exercises.forEach(e=>set.add(e.name)));PROGRAM.forEach(d=>d.ex.forEach(e=>set.add(e.name)));return [...set].sort()}
function renderProgress(){const weeks=+chartPeriodEl().value,all=records(),today=new Date(),data=[];for(let i=weeks-1;i>=0;i--){const d=new Date(today);d.setDate(d.getDate()-i*7);const ws=weekStart(d.toISOString().slice(0,10)),we=new Date(ws+'T12:00:00');we.setDate(we.getDate()+6);const week=all.filter(r=>r.date>=ws&&r.date<=we.toISOString().slice(0,10)),total=week.reduce((n,r)=>n+workoutProgress(r).total,0),done=week.reduce((n,r)=>n+workoutProgress(r).done,0),percent=total?Math.round(done/total*100):0;data.push({label:ws.slice(5),percent})}consistencyChartEl().innerHTML=data.map(x=>`<div class="barcol"><div class="barvalue">${x.percent}%</div><div class="bar" style="height:${Math.max(2,x.percent/100*185)}px"></div><div class="barlabel">${x.label}</div></div>`).join('');exerciseFilterEl().innerHTML=exerciseNames().map(n=>`<option ${n===exerciseFilterEl().value?'selected':''}>${esc(n)}</option>`).join('');renderExerciseProgress()}
function renderExerciseProgress(){const name=exerciseFilterEl().value;if(!name){exerciseProgressViewEl().innerHTML='<div class="empty">No exercises recorded yet.</div>';return}const rows=[];records().sort((a,b)=>a.date.localeCompare(b.date)).forEach(r=>r.exercises.filter(e=>e.name===name&&exerciseProgress(e).done>0).forEach(e=>{let maxWeight=0,maxReps=0,maxTime=0,volume=0;e.setData.filter(setHasData).forEach(s=>{const w=+s.weight||0,rep=parseFloat(s.reps)||0,t=parseFloat(s.time)||0;maxWeight=Math.max(maxWeight,w);maxReps=Math.max(maxReps,rep);maxTime=Math.max(maxTime,t);volume+=w*rep});rows.push({date:r.date,maxWeight,maxReps,maxTime,volume})}));exerciseProgressViewEl().innerHTML=rows.length?`<table class="progress-table"><thead><tr><th>Date</th><th>Max weight</th><th>Max reps</th><th>Max time</th><th>Volume</th></tr></thead><tbody>${rows.map(x=>`<tr><td>${x.date}</td><td>${x.maxWeight||'—'}</td><td>${x.maxReps||'—'}</td><td>${x.maxTime||'—'}</td><td>${x.volume?Math.round(x.volume):'—'}</td></tr>`).join('')}</tbody></table>`:'<div class="empty">No completed records for this exercise yet.</div>'}
function exportData(){const blob=new Blob([JSON.stringify({version:2,exportedAt:new Date().toISOString(),records:records()},null,2)],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`strength-workout-backup-${isoToday()}.json`;a.style.display='none';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);backupStatusEl().textContent='Backup downloaded.'}
async function importDataFile(e){const f=e.target.files[0];if(!f)return;try{const data=JSON.parse(await f.text()),incoming=Array.isArray(data)?data:data.records;if(!Array.isArray(incoming))throw new Error('Invalid backup file');const map=new Map(records().map(r=>[r.id,r]));incoming.forEach(r=>r?.id&&map.set(r.id,r));setRecords([...map.values()]);backupStatusEl().textContent=`Imported ${incoming.length} records.`}catch(err){backupStatusEl().textContent=err.message}e.target.value=''}
window.StrengthCompanion={
  getRecords: records,
  setRecords: items=>setRecords(Array.isArray(items)?items:[]),
  refresh: ()=>{renderDashboard();renderHistory();renderProgress();renderWorkout(false);},
  refreshPassive: ()=>{renderDashboard();renderHistory();renderProgress();},
  refreshFromCloud: (changedIds=[])=>{
    renderDashboard();renderHistory();renderProgress();
    const currentId=recordId(PROGRAM[activeDay].day,workoutDateEl()?.value||isoToday());
    if(!changedIds.includes(currentId))return;
    const editing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);
    if(editing){
      setTimeout(()=>{
        const stillEditing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);
        if(!stillEditing)loadSaved(false);
      },1200);
    }else loadSaved(false);
  },
  exportBackup: exportData
}

function init(){
 try{renderDashboard()}catch(e){console.error('Initial dashboard error',e)}
 try{
   const wd=document.getElementById('workoutDate');
   const df=document.getElementById('dayFilter');
   if(wd)wd.value=isoToday();
   activeDay=(new Date().getDay()+6)%7;
   if(df&&!df.options.length){
     PROGRAM.forEach(d=>df.insertAdjacentHTML('beforeend',`<option>${d.day}</option>`));
   }
   nav();
   renderWorkout(true);

   const bindClick=(id,fn)=>{const x=document.getElementById(id);if(x)x.onclick=fn};
   bindClick('saveWorkout',save);bindClick('addYogaSession',()=>addActivitySession('yoga'));bindClick('addWalkingSession',()=>addActivitySession('walking'));
   bindClick('loadWorkout',()=>loadSaved(true));
   bindClick('clearWorkout',clearForm);
   bindClick('markAllComplete',()=>markEveryExercise(true));
   bindClick('markAllIncomplete',()=>markEveryExercise(false));

   $$('.custom-form').forEach(form=>{
     const ex=form.querySelector('.customExercise');
     if(ex){ex.innerHTML=customExerciseOptions();ex.onchange=()=>toggleManualName(form)}
     const sets=form.querySelector('.customSets'); if(sets)sets.innerHTML=setCountOptions('2');
     const wt=form.querySelector('.customWeight'); if(wt)wt.innerHTML=weightOptions('');
     const reps=form.querySelector('.customReps'); if(reps)reps.innerHTML=repOptions('');
     const tm=form.querySelector('.customTime'); if(tm)tm.innerHTML=timeOptions('');
     const add=form.querySelector('.addCustom'); if(add)add.onclick=()=>addCustomExercise(form);
   });

   if(wd)wd.onchange=()=>{activeDay=dayIndexFromDate(wd.value);renderWorkout(true)};

   ['totalMinutes','energyBefore','energyAfter','notes','rpe'].forEach(id=>{
 const node=el(id);if(node){node.addEventListener('input',scheduleAutoSave);node.addEventListener('change',scheduleAutoSave)}
});

   bindClick('applyFilters',()=>renderHistory());
 ['fromDate','toDate','activityFilter','dayFilter','periodFilter'].forEach(id=>{const node=el(id);if(node)node.addEventListener('change',renderHistory)});
   bindClick('resetFilters',()=>{
     const f=document.getElementById('fromDate'),t=document.getElementById('toDate'),
           d=document.getElementById('dayFilter'),p=document.getElementById('periodFilter');
     if(f)f.value='';if(t)t.value='';if(d)d.value='';if(p)p.value='all';const a=activityFilterEl();if(a)a.value='all';renderHistory();
   });

   const cp=document.getElementById('chartPeriod'); if(cp)cp.onchange=renderProgress;
   const ef=document.getElementById('exerciseFilter'); if(ef)ef.onchange=renderExerciseProgress;
   bindClick('exportData',exportData);
   const imp=document.getElementById('importData'); if(imp)imp.onchange=importDataFile;
   bindClick('deleteAll',()=>{
     if(confirm('Permanently delete all locally stored workout data?')){
       localStorage.removeItem(KEY);
       const bs=document.getElementById('backupStatus');
       if(bs)bs.textContent='All local data deleted.';
       renderDashboard();
     }
   });
 }catch(e){
   console.error('Workout UI initialization failed',e);
   const status=document.getElementById('dashboardDataStatus');
   if(status)status.textContent += ` Workout UI error: ${e.message}`;
 }
};

try { init(); }
catch (err) {
  console.error('Strength Companion initialization failed:', err);
  const box=document.getElementById('completionSummary');
  if(box){box.textContent='App initialization error: '+err.message;box.classList.add('show');}
}
window.addEventListener('strength-records-changed',()=>renderDashboard());
window.dispatchEvent(new Event('strength-companion-ready'));

function clearAllSetEntries(){
  if(!confirm('Clear all set entries and exercise checks for this workout?')) return;
  currentExercises.forEach(e=>{e.complete=false;e.setData.forEach(x=>{x.weight='';x.reps='';x.time='';x.minutes='';x.notes=''})});
  renderExercises();
}
function showSimpleSummary(){
  const rec=save(true); if(!rec) return;
  const p=workoutProgress(rec),extra=additionalWork(rec),primary=primaryProgress(rec);
  const volume=Math.round(rec.exercises.reduce((n,e)=>n+exerciseBest(e).volume,0));
  completionSummaryEl().innerHTML=`<b>${PROGRAM[activeDay].kind==='recovery'?'Recovery session':'Workout'} saved.</b> ${p.done} of ${p.total} ${PROGRAM[activeDay].kind==='recovery'?'activities':'prescribed sets'} completed (${p.percent}%). ${primary.total?`Primary work: ${primary.done}/${primary.total} (${primary.percent}%). `:''}${extra.done?`Additional work: ${extra.done} extra set${extra.done===1?'':'s'}. `:''}${rec.totalMinutes?`${rec.totalMinutes} strength minutes. `:''}${recordYogaMinutes(rec)?`${recordYogaMinutes(rec)} yoga minutes. `:''}${recordWalkingMinutes(rec)?`${recordWalkingMinutes(rec)} walking minutes. `:''}${volume?`${volume.toLocaleString()} total logged volume.`:''}`;
  completionSummaryEl().classList.add('show');
  completionSummaryEl().scrollIntoView({behavior:'smooth',block:'nearest'});
  renderDashboard();
}

document.getElementById('startToday').onclick=()=>{const d=new Date();workoutDateEl().value=isoToday();activeDay=(d.getDay()+6)%7;renderWorkout(true);loadSaved(false);window.scrollTo({top:0,behavior:'smooth'});};
document.getElementById('markAllSets').onclick=()=>markEveryExercise(true);
document.getElementById('clearAllSets').onclick=clearAllSetEntries;
document.getElementById('finishWorkout').onclick=showSimpleSummary;
