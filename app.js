
const PROGRAM=[
{day:'Monday',kind:'strength',focus:'Full-Body Foundation Strength',time:'60 min',mission:'Build foundational whole-body strength through squat, hinge, push, posture, core, unilateral leg work, and loaded carries.',warm:['March in place — 1 minute','Bodyweight squats — 10','Hip hinges — 10','Cat-Cow — 8','Bird Dog — 6 each side','Arm circles — 15 forward / 15 backward','Band pull-aparts or scapular retractions — 15'],cool:['Doorway chest stretch — 30 sec each side','Kneeling hip-flexor stretch — 30 sec each side','Child’s Pose — 30–45 sec','Diaphragmatic breathing — 5 slow breaths'],ex:[
{name:'Goblet Squat',sets:4,reps:'6–8',rest:'90–120 sec',cue:'Brace, sit between the hips, knees track over toes, drive through the whole foot.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Standing Dumbbell Overhead Press',sets:3,reps:'8',rest:'75 sec',cue:'Brace, ribs down, press overhead without leaning back.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Dumbbell Romanian Deadlift',sets:3,reps:'8',rest:'90 sec',cue:'Push hips back, keep dumbbells close, neutral spine, squeeze glutes to stand.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Reverse Dumbbell Lunge',sets:3,reps:'8 each leg',rest:'75 sec',cue:'Step back under control, stay tall, drive through the front foot.',alt:'Step-Up if lunges are uncomfortable',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Farmer Carry',sets:3,time:'45–60 sec',rest:'60 sec',cue:'Stand tall, shoulders level, controlled steps, breathe normally.',equipment:'Standing Dumbbells / Carry',priority:'Primary'},
{name:'Band Face Pull',sets:2,reps:'12–15',rest:'45 sec',cue:'Pull toward forehead, elbows high, avoid shrugging.',alt:'Dumbbell rear-delt fly',equipment:'Resistance Band',priority:'Accessory'},
{name:'Pallof Press',sets:2,reps:'10 each side',rest:'30–45 sec',cue:'Keep hips square and resist rotation.',alt:'Suitcase carry',equipment:'Resistance Band',priority:'Accessory'},
{name:'Dumbbell Floor Press',sets:3,reps:'8–10',rest:'90 sec',cue:'Wrists over elbows, lightly touch upper arms to floor, press smoothly.',equipment:'Mat / Floor',priority:'Primary'},
{name:'Bird Dog',sets:2,reps:'8 each side',rest:'30 sec',cue:'Reach long, keep hips level, avoid arching.',equipment:'Mat / Floor',priority:'Accessory'}
]},
{day:'Tuesday',kind:'strength',focus:'Upper Pull, Posture, Arms & Core',time:'45 min',mission:'Develop upper-back, lat, grip and biceps strength while reinforcing posture and trunk stability.',warm:['March in place — 1 minute','Band pull-aparts — 15','Arm circles — 15 each direction','Cat-Cow — 8','Bird Dog — 6 each side'],cool:['Doorway chest stretch — 30 sec each side','Open-book thoracic rotation — 6 each side','Diaphragmatic breathing — 5 breaths'],ex:[
{name:'One-Arm Dumbbell Row',sets:4,reps:'8–10 each side',rest:'75 sec',cue:'Pull elbow toward back pocket, pause, do not twist.',equipment:'Dumbbells',priority:'Primary'},
{name:'Hammer Curl',sets:3,reps:'10–12',rest:'45 sec',cue:'Elbows close, no swinging, lower slowly.',equipment:'Dumbbells',priority:'Accessory'},
{name:'Rear Delt Fly',sets:3,reps:'12–15',rest:'45 sec',cue:'Soft elbows, lift with rear shoulders, avoid shrugging.',alt:'Band face pull',equipment:'Dumbbells',priority:'Accessory'},
{name:'Band Lat Pulldown',sets:3,reps:'10–12',rest:'60 sec',cue:'Drive elbows toward ribs, chest lifted, return slowly.',equipment:'Resistance Band',priority:'Primary'},
{name:'Band Pull-Apart',sets:2,reps:'15',rest:'30 sec',cue:'Shoulders down, squeeze upper back, return slowly.',alt:'Prone Y-T-W raise',equipment:'Resistance Band',priority:'Accessory'},
{name:'Dead Bug',sets:2,reps:'8–10 each side',rest:'30 sec',cue:'Keep ribs down and lower back steady as limbs extend.',equipment:'Mat / Floor',priority:'Accessory'},
{name:'Side Plank',sets:2,time:'30–45 sec each side',rest:'30 sec',cue:'Keep hips lifted and body aligned.',equipment:'Mat / Floor',priority:'Accessory'}
]},
{day:'Wednesday',kind:'strength',focus:'Lower Body & Posterior Chain Strength',time:'60 min',mission:'Build strong hips, glutes, hamstrings and legs while reinforcing spinal stability, balance, and carrying strength.',warm:['March in place — 1 minute','Hip hinges — 10','Bodyweight good mornings — 10','Mini-band lateral walk — 10 each direction','Cat-Cow — 8','Bird Dog — 6 each side','World’s greatest stretch — 5 each side'],cool:['Kneeling hip-flexor stretch — 30 sec each side','Figure-4 glute stretch — 30 sec each side','Child’s Pose — 30–45 sec','Diaphragmatic breathing — 5 breaths'],ex:[
{name:'Dumbbell Romanian Deadlift',sets:4,reps:'6–8',rest:'2 min',cue:'Brace, hips back, weights close, neutral spine, finish with glutes.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Bulgarian Split Squat',sets:3,reps:'8 each leg',rest:'90 sec',cue:'Stay tall, front knee tracks over toes, drive through front foot.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Step-Up',sets:3,reps:'8–10 each leg',rest:'75 sec',cue:'Use the lead leg, stand fully, lower slowly and under control.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Suitcase Carry',sets:3,time:'45–60 sec each side',rest:'45 sec',cue:'Resist leaning, shoulders level, slow steps.',equipment:'Standing Dumbbells / Carry',priority:'Primary'},
{name:'Rear Delt Fly',sets:2,reps:'12–15',rest:'45 sec',cue:'Lift from rear shoulders, keep neck relaxed, avoid shrugging.',alt:'Band face pull',equipment:'Standing Dumbbells',priority:'Accessory'},
{name:'Standing Calf Raise',sets:3,reps:'15–20',rest:'30–45 sec',cue:'Rise high, pause briefly, lower slowly through full range.',equipment:'Standing Dumbbells',priority:'Accessory'},
{name:'Pallof Press',sets:2,reps:'10 each side',rest:'30–45 sec',cue:'Brace, keep hips and shoulders square, and resist rotation.',alt:'Repeat Suitcase Carry if using dumbbells only',equipment:'Resistance Band',priority:'Accessory'},
{name:'Dumbbell Hip Thrust',sets:3,reps:'10–12',rest:'75 sec',cue:'Ribs down, drive through heels, pause and squeeze glutes at the top.',alt:'Glute Bridge',equipment:'Mat / Floor',priority:'Primary'},
{name:'Dead Bug',sets:2,reps:'10 each side',rest:'30 sec',cue:'Lower back gently down, exhale as limb extends.',equipment:'Mat / Floor',priority:'Accessory'}
]},
{day:'Thursday',kind:'recovery',focus:'Recovery: Yoga, Yin Yoga & Optional Walking',time:'Recovery day',mission:'Recover from strength training with a general yoga practice, a separate yin-yoga practice, and optional walking or mobility work.',warm:['Choose the recovery activities that fit your body today. No strength warm-up is required.'],cool:['Finish feeling calmer, looser, and ready for Friday.'],ex:[
{name:'Yoga Practice',sets:1,time:'20–60 min',recovery:true,optional:false,rest:'',cue:'Choose a yoga style that matches your energy and recovery needs for the day.',typeLabel:'Yoga type',typeOptions:['Gentle Vinyasa Yoga','Power Yoga','Restorative Yoga','Hatha / General Yoga','Other Yoga']},
{name:'Yin Yoga Practice',sets:1,time:'20–60 min',recovery:true,optional:false,rest:'',cue:'Use sustained positions at a tolerable intensity and never force a joint.',typeLabel:'Yin type',typeOptions:['Yin Yoga','Restorative Yin Yoga','Gentle Yin Yoga','Other Yin Practice']},
{name:'Walking (Optional)',sets:1,time:'10–60 min',recovery:true,optional:true,rest:'',cue:'Keep the pace conversational and restorative rather than demanding.'},
{name:'Mobility / Reset Work (Optional)',sets:1,time:'5–20 min',recovery:true,optional:true,rest:'',cue:'Focus on areas that feel stiff, using slow, pain-free movement.'}
]},
{day:'Friday',kind:'strength',focus:'Upper Push, Posture, Arms & Calves',time:'45 min',mission:'Build upper-body pushing strength while maintaining shoulder balance, posture, arm strength, and lower-leg resilience.',warm:['March in place — 1 minute','Band pull-aparts — 15','Arm circles — 15 each direction','Shoulder rolls — 10 each direction','Scapular push-ups — 10'],cool:['Doorway chest stretch — 30 sec each side','Cross-body shoulder stretch — 30 sec each side','Standing calf stretch — 30 sec each side'],ex:[
{name:'Standing Dumbbell Overhead Press',sets:3,reps:'6–8',rest:'75–90 sec',cue:'Brace, keep ribs down, and press overhead without leaning back.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Alternating Dumbbell Curl',sets:2,reps:'10 each arm',rest:'45 sec',cue:'Elbows close, no swinging, control the eccentric.',equipment:'Standing Dumbbells',priority:'Accessory'},
{name:'Standing Calf Raise',sets:3,reps:'15–20',rest:'30–45 sec',cue:'Rise high, pause, lower slowly through full range.',equipment:'Standing Dumbbells',priority:'Accessory'},
{name:'Band Face Pull',sets:2,reps:'12–15',rest:'45 sec',cue:'Elbows high, pull toward forehead, avoid shrugging.',alt:'Rear-delt fly',equipment:'Resistance Band',priority:'Accessory'},
{name:'Band External Rotation',sets:2,reps:'12–15 each arm',rest:'30 sec',cue:'Elbow tucked, rotate from shoulder, torso still.',alt:'Side-lying dumbbell external rotation',equipment:'Resistance Band',priority:'Accessory'},
{name:'Dumbbell Floor Press',sets:3,reps:'8–10',rest:'75 sec',cue:'Shoulders packed, wrists straight, controlled lowering.',equipment:'Mat / Floor',priority:'Primary'},
{name:'Push-Up Plus',sets:3,reps:'8–12',rest:'60–75 sec',cue:'Straight body line; at top push floor away to protract shoulder blades.',alt:'Incline push-up plus',equipment:'Mat / Floor',priority:'Accessory'},
{name:'Overhead Dumbbell Triceps Extension',sets:2,reps:'10–12',rest:'45 sec',cue:'Elbows mostly forward, ribs down, controlled lowering.',equipment:'Mat / Floor + Dumbbell',priority:'Accessory'}
]},
{day:'Saturday',kind:'strength',focus:'Full-Body Functional Strength & Performance',time:'60 min',mission:'Integrate strength, coordination, stability, carries, balance, and whole-body movement into one comprehensive session without repeating Friday’s pressing volume.',warm:['March in place — 1 minute','Bodyweight squats — 10','Hip hinges — 10','World’s greatest stretch — 5 each side','Arm circles — 15 each direction','Bird Dog — 6 each side','Scapular push-ups — 10'],cool:['Figure-4 glute stretch — 30 sec each side','Doorway chest stretch — 30 sec each side','Child’s Pose — 30–45 sec','Diaphragmatic breathing — 5 breaths'],ex:[
{name:'Double-Dumbbell Front Squat',sets:4,reps:'6–8',rest:'90–120 sec',cue:'Rack dumbbells securely, brace, sit between the hips, and drive through the whole foot.',alt:'Goblet Squat if double-dumbbell loading is not yet comfortable',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Walking Dumbbell Lunge',sets:3,reps:'10 each leg',rest:'75 sec',cue:'Upright torso, controlled stride, push through front foot.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'One-Arm Dumbbell Row',sets:3,reps:'8–10 each side',rest:'60–75 sec',cue:'Stable torso, elbow to hip, controlled return.',equipment:'Standing Dumbbells',priority:'Primary'},
{name:'Farmer Carry',sets:3,time:'60 sec',rest:'60 sec',cue:'Tall posture, level shoulders, smooth breathing.',equipment:'Standing Dumbbells / Carry',priority:'Primary'},
{name:'Single-Leg Balance Reach',sets:2,reps:'8 each leg',rest:'30 sec',cue:'Reach slowly and return under control.',equipment:'Standing / Bodyweight',priority:'Accessory'},
{name:'Band Lat Pulldown',sets:3,reps:'10–12',rest:'60 sec',cue:'Drive elbows toward ribs, keep chest lifted, and return slowly.',equipment:'Resistance Band',priority:'Primary'},
{name:'Partial Turkish Get-Up',sets:2,reps:'3 each side',rest:'60 sec',cue:'Move step by step and keep the shoulder stable.',alt:'Full Turkish Get-Up when ready',equipment:'Mat / Floor + Dumbbell',priority:'Accessory'},
{name:'Renegade Row',sets:2,reps:'6–8 each side',rest:'60 sec',cue:'Keep hips square and row without twisting.',alt:'Plank dumbbell drag or One-Arm Row',equipment:'Mat / Floor + Dumbbells',priority:'Accessory'},
{name:'Bear Crawl',sets:2,time:'20–30 sec',rest:'45 sec',cue:'Knees hover low, opposite hand and foot move together, hips level.',equipment:'Mat / Floor',priority:'Accessory'}
]},
{day:'Sunday',kind:'recovery',focus:'Recovery: Yoga, Yin Yoga & Optional Walking',time:'Recovery day',mission:'Use yoga and yin yoga to restore movement quality, with optional walking or mobility work before Monday.',warm:['Choose the recovery activities that match your energy and soreness today.'],cool:['Finish feeling restored rather than trained.'],ex:[
{name:'Yoga Practice',sets:1,time:'20–60 min',recovery:true,optional:false,rest:'',cue:'Choose Gentle Vinyasa, Power, Restorative, Hatha/general yoga, or another style based on your body today.',typeLabel:'Yoga type',typeOptions:['Gentle Vinyasa Yoga','Power Yoga','Restorative Yoga','Hatha / General Yoga','Other Yoga']},
{name:'Yin Yoga Practice',sets:1,time:'20–60 min',recovery:true,optional:false,rest:'',cue:'Choose a yin practice that supports recovery. It may be restorative, but does not have to be.',typeLabel:'Yin type',typeOptions:['Yin Yoga','Restorative Yin Yoga','Gentle Yin Yoga','Other Yin Practice']},
{name:'Walking (Optional)',sets:1,time:'10–60 min',recovery:true,optional:true,rest:'',cue:'Keep the walk easy or conversational unless you intentionally want more activity.'},
{name:'Mobility / Reset Work (Optional)',sets:1,time:'5–20 min',recovery:true,optional:true,rest:'',cue:'Use only as needed for areas that feel stiff or restricted.'}
]}
];
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
  if(!r) return {yoga:[],walking:[]};
  const activities=r.activities||{};
  const yoga=Array.isArray(activities.yoga)?activities.yoga:[];
  const walking=Array.isArray(activities.walking)?activities.walking:[];
  return {yoga,walking};
}

function legacyRecoveryActivityMinutes(r){
  let yoga=0,walking=0;
  (r?.exercises||[]).forEach(e=>{
    if(!e?.recovery)return;
    const mins=parseFloat(e?.setData?.[0]?.minutes)||0;
    const name=(e.name||'').toLowerCase();
    if(name.includes('walk'))walking+=mins;
    else if(name.includes('yoga'))yoga+=mins;
  });
  return {yoga,walking};
}
function recordYogaMinutes(r){
  const direct=yogaMinutesForRecord(r);
  const legacy=legacyRecoveryActivityMinutes(r).yoga;
  return direct||legacy;
}
function recordWalkingMinutes(r){
  const direct=walkingMinutesForRecord(r);
  const legacy=legacyRecoveryActivityMinutes(r).walking;
  return direct||legacy;
}

function yogaTypes(){
  return [
    'Gentle Vinyasa Yoga',
    'Power Yoga',
    'Hatha / General Yoga',
    'Restorative Yoga',
    'Yin Yoga',
    'Restorative Yin Yoga',
    'Gentle Yin Yoga',
    'Other Yoga'
  ];
}
function yogaMinutesForRecord(r){
  const a=normalizeActivities(r);
  return a.yoga.reduce((n,s)=>n+(parseFloat(s.minutes)||0),0);
}
function walkingMinutesForRecord(r){
  const a=normalizeActivities(r);
  return a.walking.reduce((n,s)=>n+(parseFloat(s.minutes)||0),0);
}
function allOtherMinutesForRecord(r){
  return yogaMinutesForRecord(r)+walkingMinutesForRecord(r);
}


function recordTrainingMinutes(r){
 const isRecovery=r?.kind==='recovery'||r?.day==='Thursday'||r?.day==='Sunday';
 if(!isRecovery){
   const m=parseFloat(r?.totalMinutes);
   return {strength:Number.isFinite(m)?m:0,recovery:recordYogaMinutes(r)+recordWalkingMinutes(r)};
 }
 return {strength:0,recovery:recordYogaMinutes(r)+recordWalkingMinutes(r)};
}
function weeklyTrainingTimeRows(limit=12){
 const all=records();
 const today=isoToday();
 const currentStart=weekStart(today);
 const rows=[];
 for(let i=0;i<limit;i++){
   const start=addDays(currentStart,-7*i),end=addDays(start,6);
   const weekRecords=all.filter(r=>r.date>=start&&r.date<=end);
   const mins=weekRecords.map(recordTrainingMinutes);
   const strength=mins.reduce((n,m)=>n+m.strength,0);
   const recovery=mins.reduce((n,m)=>n+m.recovery,0);
   rows.push({start,end,strength,recovery,current:i===0,hasData:weekRecords.length>0});
 }
 return rows;
}
function renderWeeklyTrainingTimeHistory(){
 const box=weeklyTimeHistoryEl();
 if(!box)return;
 const rows=weeklyTrainingTimeRows(12);
 box.innerHTML=`<div class="weekly-time-list">${rows.map(r=>`<div class="weekly-time-row ${r.current?'current':''}"><div class="weekly-time-dates"><b>${r.current?'Current week':'Week of '+r.start}</b><small>${r.start} – ${r.end}</small></div><div class="weekly-time-breakdown">${r.hasData?`<div><span>Strength</span><b>${r.strength} min</b></div><div><span>Other / recovery</span><b>${r.recovery} min</b></div>`:`<small>No sessions logged</small>`}</div></div>`).join('')}</div>`;
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
    const otherMinutes=currentMins.reduce((n,m)=>n+(Number(m.recovery)||0),0);

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
    setText('dashOtherMinutes',`${otherMinutes} min`);

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


function currentRecordForActivity(){
  const date=workoutDateEl()?.value||isoToday();
  return (records()||[]).find(r=>r?.date===date)||null;
}
function currentDraftActivities(){
  const saved=currentRecordForActivity();
  return normalizeActivities(saved);
}
function activityMinuteOptions(value=''){
  const current=String(value??'');
  const values=[];
  for(let m=5;m<=120;m+=5)values.push(String(m));
  // Preserve an unusual saved duration rather than losing it.
  if(current && !values.includes(current))values.push(current);
  values.sort((a,b)=>Number(a)-Number(b));
  return `<option value="">Minutes</option>${values.map(m=>`<option value="${m}" ${current===m?'selected':''}>${m} min</option>`).join('')}`;
}
function activitySessionHTML(kind,session={},index=0){
  if(kind==='yoga'){
    const options=yogaTypes().map(t=>`<option ${session.type===t?'selected':''}>${esc(t)}</option>`).join('');
    return `<div class="activity-session" data-kind="yoga" data-index="${index}">
      <label>Yoga type<select class="activityType">${options}</select></label>
      <label>Minutes<select class="activityMinutes">${activityMinuteOptions(session.minutes??'')}</select></label>
      <button type="button" class="remove-activity secondary">Remove</button>
    </div>`;
  }
  return `<div class="activity-session" data-kind="walking" data-index="${index}">
    <label>Walking<select class="activityType"><option ${session.type==='Walking'?'selected':''}>Walking</option><option ${session.type==='Brisk Walking'?'selected':''}>Brisk Walking</option><option ${session.type==='Easy Walking'?'selected':''}>Easy Walking</option><option ${session.type==='Other Walking'?'selected':''}>Other Walking</option></select></label>
    <label>Minutes<select class="activityMinutes">${activityMinuteOptions(session.minutes??'')}</select></label>
    <button type="button" class="remove-activity secondary">Remove</button>
  </div>`;
}
function readActivityUI(){
  const out={yoga:[],walking:[]};
  document.querySelectorAll('.activity-session').forEach(row=>{
    const kind=row.dataset.kind;
    const type=row.querySelector('.activityType')?.value||'';
    const minutes=parseFloat(row.querySelector('.activityMinutes')?.value)||0;
    if(kind==='yoga'||kind==='walking'){
      if(type||minutes) out[kind].push({type,minutes});
    }
  });
  return out;
}
function updateDailyActivityTotals(){
  const a=readActivityUI();
  const y=a.yoga.reduce((n,s)=>n+(Number(s.minutes)||0),0);
  const w=a.walking.reduce((n,s)=>n+(Number(s.minutes)||0),0);
  if(dailyYogaTotalEl()) dailyYogaTotalEl().textContent=`${y} min`;
  if(dailyWalkingTotalEl()) dailyWalkingTotalEl().textContent=`${w} min`;
}
function bindActivityRows(){
  document.querySelectorAll('.activity-session').forEach(row=>{
    row.querySelectorAll('select,input').forEach(node=>{
      node.addEventListener('input',()=>{updateDailyActivityTotals();scheduleAutoSave()});
      node.addEventListener('change',()=>{updateDailyActivityTotals();scheduleAutoSave()});
    });
    const rem=row.querySelector('.remove-activity');
    if(rem) rem.onclick=()=>{
      row.remove();
      updateDailyActivityTotals();
      scheduleAutoSave();
    };
  });
}
function renderDailyActivities(){
  const a=currentDraftActivities();
  if(yogaSessionsEl()) yogaSessionsEl().innerHTML=a.yoga.map((s,i)=>activitySessionHTML('yoga',s,i)).join('');
  if(walkingSessionsEl()) walkingSessionsEl().innerHTML=a.walking.map((s,i)=>activitySessionHTML('walking',s,i)).join('');
  bindActivityRows();
  updateDailyActivityTotals();
}
function addActivitySession(kind){
  const host=kind==='yoga'?yogaSessionsEl():walkingSessionsEl();
  if(!host)return;
  const index=host.querySelectorAll('.activity-session').length;
  host.insertAdjacentHTML('beforeend',activitySessionHTML(kind,kind==='yoga'?{type:'Gentle Vinyasa Yoga',minutes:''}:{type:'Walking',minutes:''},index));
  bindActivityRows();
}

function renderWorkout(reset=true){const d=PROGRAM[activeDay],isRecovery=d.kind==='recovery';dayTitleEl().textContent=`${d.day} — ${d.focus}`;missionEl().textContent=d.mission;summaryEl().innerHTML=`<span class="pill">${d.time}</span><span class="pill">${d.ex.length} ${isRecovery?'recovery activities':'programmed exercises'}</span><span class="pill">${isRecovery?'Activity tracking':'Set-level tracking'}</span>`;warmupEl().innerHTML=d.warm.map(x=>`<li>${esc(x)}</li>`).join('');cooldownEl().innerHTML=d.cool.map(x=>`<li>${esc(x)}</li>`).join('');strengthQuickActionsEl().hidden=isRecovery;customExerciseCardEl().hidden=isRecovery;rpeFieldEl().hidden=isRecovery;warmupCardEl().hidden=isRecovery;cooldownCardEl().hidden=isRecovery;if(programLegendEl())programLegendEl().hidden=isRecovery;renderDaybar();if(!isRecovery)refreshCustomSelectors();if(reset){currentExercises=baseExercises();clearSessionFields()}renderExercises();updateCompletion();loadSaved(false)}
function updateRecoveryTotalMinutes(){if(PROGRAM[activeDay].kind!=='recovery')return;const total=currentExercises.reduce((n,e)=>n+(parseFloat(e.setData?.[0]?.minutes)||0),0);if(totalMinutesEl().value!==String(total||''))totalMinutesEl().value=total||''}
function renderExercises(){let html='',lastGroup='';currentExercises.forEach((e,i)=>{const group=e.custom?'Additional Work':(e.recovery?'Recovery Activities':(e.equipment||'Other'));if(group!==lastGroup){html+=`<div class="equipment-block-header ${e.custom?'additional-block':''}"><div><b>${esc(group)}</b>${!e.custom&&!e.recovery?'<span>Work through this station before moving on.</span>':''}</div></div>`;lastGroup=group}html+=exerciseHTML(e,i)});exerciseListEl().innerHTML=html;$$('.exercise').forEach((card,i)=>{const e=currentExercises[i];card.querySelector('.donecheck').onchange=ev=>{e.complete=ev.target.checked;card.classList.toggle('done',e.complete);updateCompletion();scheduleAutoSave()};if(e.recovery){const minutes=card.querySelector('.minutes'),notes=card.querySelector('.notes'),typeSel=card.querySelector('.activityType');if(minutes){const handler=ev=>{e.setData[0].minutes=ev.target.value;updateRecoveryTotalMinutes();updateCompletion();scheduleAutoSave()};minutes.oninput=handler;minutes.onchange=handler}if(notes)notes.oninput=ev=>{e.setData[0].notes=ev.target.value;scheduleAutoSave()};if(typeSel)typeSel.onchange=ev=>{e.selectedType=ev.target.value;updateCompletion();scheduleAutoSave()};return}card.querySelectorAll('.setrow').forEach((row,si)=>{['weight','reps','time','notes'].forEach(k=>{const el=row.querySelector('.'+k);const handler=ev=>{e.setData[si][k]=ev.target.value;updateCompletion();scheduleAutoSave()};el.oninput=handler;el.onchange=handler})});const typeSel=card.querySelector('.activityType');if(typeSel)typeSel.onchange=ev=>{e.selectedType=ev.target.value;scheduleAutoSave()};card.querySelector('.addset').onclick=()=>{e.setData.push({weight:'',reps:'',time:'',minutes:'',notes:''});renderExercises();updateCompletion();scheduleAutoSave()};card.querySelector('.removeset').onclick=()=>{if(e.setData.length>1)e.setData.pop();renderExercises();updateCompletion();scheduleAutoSave()};const del=card.querySelector('.deleteExercise');if(del)del.onclick=()=>{currentExercises.splice(i,1);renderExercises();updateCompletion();scheduleAutoSave()};const subBtn=card.querySelector('.substituteExercise');if(subBtn){const panel=card.querySelector('.sub-panel'),sel=card.querySelector('.sub-select'),manualWrap=card.querySelector('.sub-manual'),manual=card.querySelector('.sub-manual-input');subBtn.onclick=()=>{panel.classList.toggle('show');if(panel.classList.contains('show'))sel.focus()};sel.onchange=()=>{manualWrap.hidden=sel.value!=='__other__';if(sel.value==='__other__')manual.focus()};card.querySelector('.applySub').onclick=()=>{applySubstitution(e,card);scheduleAutoSave()};card.querySelector('.cancelSub').onclick=()=>panel.classList.remove('show');const restore=card.querySelector('.restoreExercise');if(restore)restore.onclick=()=>{restoreOriginal(e);scheduleAutoSave()}}})}
function activityTypeControl(e){if(!e.typeOptions?.length)return '';const opts=optionList(e.typeOptions,e.selectedType||'',`— select ${e.typeLabel||'type'} —`);return `<div class="activity-type"><label>${esc(e.typeLabel||'Activity type')}</label><select class="activityType">${opts}</select></div>`}
function recoveryExerciseHTML(e,i){const s=e.setData?.[0]||{minutes:'',notes:''};return `<article class="exercise recovery-card ${e.complete?'done':''}"><div class="exercise-head"><div class="num">${i+1}</div><div><h3>${esc(e.name)}</h3><div class="rx">${e.optional?'Optional activity':'Planned recovery activity'}${e.time?' · '+esc(e.time):''}</div></div><div><label class="check"><input class="donecheck" type="checkbox" ${e.complete?'checked':''}> Completed</label><div class="exercise-progress">${exerciseProgress(e).percent}%</div></div></div><div class="cuebox"><h4>Guidance</h4><p>${esc(e.cue||'Choose a comfortable, restorative effort.')}</p></div>${activityTypeControl(e)}<div class="recovery-fields"><div><label>Duration (minutes)</label><select class="minutes">${minuteOptions(s.minutes||s.time||'')}</select></div><div class="wide"><label>Notes</label><input class="notes" value="${esc(s.notes||'')}" placeholder="How it felt, focus, route, or modifications"></div></div></article>`}
function exerciseHTML(e,i){if(e.recovery)return recoveryExerciseHTML(e,i);const setRows=e.setData.map((s,si)=>`<div class="setrow"><b>${si+1}</b><select class="weight">${weightOptions(s.weight)}</select><select class="reps">${repOptions(s.reps)}</select><select class="time">${timeOptions(s.time)}</select><input class="notes" value="${esc(s.notes)}" placeholder="notes / band"></div>`).join('');return `<article class="exercise ${e.complete?'done':''}"><div class="exercise-head"><div class="num">${i+1}</div><div><h3>${esc(e.name)}</h3><div class="exercise-badges">${e.priority?`<span class="priority-badge ${e.priority==='Primary'?'primary-priority':'accessory-priority'}">${esc(e.priority)}</span>`:''}${e.equipment?`<span class="equipment-badge">${esc(e.equipment)}</span>`:''}</div>${e.substitutedFor?`<div class="sub-badge">Substituted for ${esc(e.substitutedFor)}</div>`:''}<div class="rx">${e.setData.length} sets${e.reps?' · '+esc(e.reps):''}${e.time?' · '+esc(e.time):''}${e.rest?' · rest '+esc(e.rest):''}</div></div><div><label class="check"><input class="donecheck" type="checkbox" ${e.complete?'checked':''}> Mark all sets complete</label><div class="exercise-progress">${exerciseProgress(e).done}/${exerciseProgress(e).total} sets · ${exerciseProgress(e).percent}%</div></div></div><div class="exercise-grid"><div class="cuebox"><h4>Technique cue</h4><p>${esc(e.cue||'Use controlled repetitions and good form.')}</p></div><div class="cuebox"><h4>Alternative / note</h4><p>${esc(e.alt|| (e.custom?'Custom exercise':'Use the prescribed variation unless a substitution is needed.'))}</p></div></div>${activityTypeControl(e)}${!e.custom?`<div class="actions"><button class="small substituteExercise">${e.substitutedFor?'Change substitution':'Substitute exercise'}</button>${e.substitutedFor?'<button class="small restoreExercise">Restore original exercise</button>':''}</div><div class="sub-panel"><div class="sub-grid"><div><label>Replacement exercise</label><select class="sub-select">${substitutionOptions(e.substitutedFor?e.name:'')}</select></div><div class="sub-manual" hidden><label>Other exercise</label><input class="sub-manual-input" placeholder="Enter replacement name"></div><button class="small applySub">Apply substitution</button><button class="small cancelSub">Cancel</button></div><p class="muted">The replacement uses the same scheduled set slots, so completed sets receive full credit toward today’s workout. You may add or remove sets afterward.</p></div>`:''}<div class="sets"><div class="setlabels"><span>Set</span><span>Weight</span><span>Reps</span><span>Time</span><span>Notes</span></div>${setRows}<div class="setactions"><button class="small addset">+ Set</button><button class="small removeset">− Set</button>${e.custom?'<button class="small danger deleteExercise">Delete exercise</button>':''}</div></div></article>`}
function updateCompletion(){const p=programProgress({exercises:currentExercises}),extra=additionalWork({exercises:currentExercises}),primary=primaryProgress({exercises:currentExercises}),isRecovery=PROGRAM[activeDay].kind==='recovery';completionBarEl().style.width=p.percent+'%';completionTextEl().textContent=isRecovery?`${p.done} of ${p.total} planned recovery activities completed (${p.percent}%). Optional activities add information without lowering the percentage.`:`Program completion: ${p.done} of ${p.total} prescribed sets (${p.percent}%).${primary.total?` Primary work: ${primary.done}/${primary.total} sets (${primary.percent}%).`:''}${extra.done?` Additional work: ${extra.done} extra set${extra.done===1?'':'s'} performed.`:''}`;if(window.topCompletionBar)topCompletionBarEl().style.width=p.percent+'%';if(window.topCompletionText)topCompletionTextEl().textContent=isRecovery?`${p.done} of ${p.total} activities · ${p.percent}%`:`Program ${p.done}/${p.total} · ${p.percent}%${primary.total?` · Primary ${primary.percent}%`:''}${extra.done?` · +${extra.done} extra`:''}`;document.querySelectorAll('.exercise').forEach((card,i)=>{const ep=exerciseProgress(currentExercises[i]);const label=card.querySelector('.exercise-progress');if(label)label.textContent=currentExercises[i].recovery?`${ep.percent}% complete`:`${ep.done}/${ep.total} sets · ${ep.percent}%`;card.classList.toggle('done',ep.percent===100)})}
function clearSessionFields(){totalMinutesEl().value='';rpeEl().value='';energyBeforeEl().value='';energyAfterEl().value='';notesEl().value=''}
function recordId(day,date){return `${date}-${day}`}
function collect(){const d=PROGRAM[activeDay],date=workoutDateEl().value;return{id:recordId(d.day,date),date,day:d.day,kind:d.kind,focus:d.focus,plannedCount:d.ex.length,totalMinutes:totalMinutesEl().value,
    activities:readActivityUI(),rpe:rpeEl().value,energyBefore:energyBeforeEl().value,energyAfter:energyAfterEl().value,notes:notesEl().value,updatedAt:new Date().toISOString(),exercises:currentExercises.map(e=>({...e,setData:e.setData.map(s=>({...s}))}))}}
let autoSaveTimer=null;function meaningfulCurrentSession(){
  const activities=readActivityUI();
  const hasActivities=
    activities.yoga.some(s=>(Number(s.minutes)||0)>0)||
    activities.walking.some(s=>(Number(s.minutes)||0)>0);
  return hasActivities||
    currentExercises.some(e=>e.complete||e.selectedType||(e.setData||[]).some(setHasData))||
    totalMinutesEl().value||
    energyBeforeEl().value||
    energyAfterEl().value||
    notesEl().value.trim();
}
function saveSilently(){if(!workoutDateEl().value||!meaningfulCurrentSession())return null;const rec=collect(),all=records(),idx=all.findIndex(x=>x.id===rec.id);if(idx>=0)all[idx]=rec;else all.push(rec);setRecords(all);renderDashboard();return rec}
function scheduleAutoSave(){clearTimeout(autoSaveTimer);autoSaveTimer=setTimeout(()=>{const rec=saveSilently();if(rec){completionSummaryEl().textContent='Saved automatically';completionSummaryEl().classList.add('show');setTimeout(()=>completionSummaryEl().classList.remove('show'),1400)}},650)}
function save(){if(!workoutDateEl().value)return alert('Choose a date.');const rec=collect(),all=records(),idx=all.findIndex(x=>x.id===rec.id);if(idx>=0)all[idx]=rec;else all.push(rec);setRecords(all);renderDashboard();alert((PROGRAM[activeDay].kind==='recovery'?'Recovery session':'Workout')+' saved locally.');}
function loadSaved(show=true){const d=PROGRAM[activeDay],rec=records().find(x=>x.id===recordId(d.day,workoutDateEl().value));if(!rec){if(show)alert('No saved workout for this day and date.');return}currentExercises=normalizeSavedExercises(rec.exercises);totalMinutesEl().value=rec.totalMinutes||'';rpeEl().value=rec.rpe||'';energyBeforeEl().value=rec.energyBefore||'';energyAfterEl().value=rec.energyAfter||'';notesEl().value=rec.notes||'';renderExercises();renderDailyActivities();updateCompletion();if(show)alert('Saved workout loaded.');}
function clearForm(){if(!confirm('Clear the current unsaved form?'))return;currentExercises=baseExercises();clearSessionFields();renderExercises();updateCompletion()}
function addCustomExercise(form){const selected=form.querySelector('.customExercise').value;const manual=form.querySelector('.customName').value.trim();const name=selected==='__other__'?manual:selected;if(!name)return alert(selected==='__other__'?'Enter an exercise name.':'Select an exercise.');const setsEl=form.querySelector('.customSets'),weightEl=form.querySelector('.customWeight'),repsEl=form.querySelector('.customReps'),timeEl=form.querySelector('.customTime');const n=Math.max(1,+setsEl.value||1),weight=weightEl.value||'';currentExercises.push({id:'custom-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),custom:true,name,sets:n,reps:repsEl.value?repsEl.value:'',time:timeEl.value?timeEl.value+' sec':'',rest:'',cue:'Additional exercise — record the variation and form notes as needed.',complete:false,setData:Array.from({length:n},()=>({weight,reps:repsEl.value||'',time:timeEl.value||'',notes:''}))});form.querySelector('.customExercise').value='';form.querySelector('.customName').value='';form.querySelector('.manual-name').hidden=true;setsEl.value='2';weightEl.value='';repsEl.value='';timeEl.value='';renderExercises();updateCompletion();}
function weekStart(date){const d=new Date(date+'T12:00:00'),day=(d.getDay()+6)%7;d.setDate(d.getDate()-day);return d.toISOString().slice(0,10)}
function monthStart(){const d=new Date();return new Date(d.getFullYear(),d.getMonth(),1).toISOString().slice(0,10)}
function filtered(){
  let list=[...(records()||[])];
  const from=fromDateEl()?.value||'';
  const to=toDateEl()?.value||'';
  const day=dayFilterEl()?.value||'';
  const period=periodFilterEl()?.value||'all';
  const activity=activityFilterEl()?.value||'all';

  if(from)list=list.filter(r=>r.date>=from);
  if(to)list=list.filter(r=>r.date<=to);
  if(day)list=list.filter(r=>r.day===day);

  if(period!=='all'){
    const today=isoToday();
    if(period==='week'){
      const s=weekStart(today),e=addDays(s,6);
      list=list.filter(r=>r.date>=s&&r.date<=e);
    }else if(period==='month'){
      list=list.filter(r=>monthKey(r.date)===monthKey(today));
    }else if(period==='12weeks'){
      const s=addDays(weekStart(today),-77);
      list=list.filter(r=>r.date>=s);
    }
  }

  if(activity==='strength'){
    list=list.filter(r=>r.kind!=='recovery' && (r.exercises||[]).some(e=>!e.recovery && (e.setData||[]).some(setHasData)));
  }else if(activity==='yoga'){
    list=list.filter(r=>recordYogaMinutes(r)>0);
  }else if(activity==='walking'){
    list=list.filter(r=>recordWalkingMinutes(r)>0);
  }

  return list.sort((a,b)=>(b.date||'').localeCompare(a.date||''));
}
;

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
   bindClick('saveWorkout',save);
   bindClick('addYogaSession',()=>addActivitySession('yoga'));
   bindClick('addWalkingSession',()=>addActivitySession('walking'));
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
     const el=document.getElementById(id);
     if(node){
       node.addEventListener('input',scheduleAutoSave);
       node.addEventListener('change',scheduleAutoSave);
     }
   });

   bindClick('applyFilters',()=>renderHistory());
   ['fromDate','toDate','dayFilter','periodFilter','activityFilter'].forEach(id=>{
     const node=el(id);
     if(node)node.addEventListener('change',()=>renderHistory());
   });
   bindClick('resetFilters',()=>{
     const f=document.getElementById('fromDate'),t=document.getElementById('toDate'),
           d=document.getElementById('dayFilter'),p=document.getElementById('periodFilter');
     if(f)f.value=''; if(t)t.value=''; if(d)d.value=''; if(p)p.value='all'; const a=activityFilterEl(); if(a)a.value='all'; renderHistory();
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
  completionSummaryEl().innerHTML=`<b>${PROGRAM[activeDay].kind==='recovery'?'Recovery session':'Workout'} saved.</b> ${p.done} of ${p.total} ${PROGRAM[activeDay].kind==='recovery'?'activities':'prescribed sets'} completed (${p.percent}%). ${primary.total?`Primary work: ${primary.done}/${primary.total} (${primary.percent}%). `:''}${extra.done?`Additional work: ${extra.done} extra set${extra.done===1?'':'s'}. `:''}${rec.totalMinutes?`${rec.totalMinutes} minutes recorded. `:''}${volume?`${volume.toLocaleString()} total logged volume.`:''}`;
  completionSummaryEl().classList.add('show');
  completionSummaryEl().scrollIntoView({behavior:'smooth',block:'nearest'});
  renderDashboard();
}

document.getElementById('startToday').onclick=()=>{const d=new Date();workoutDateEl().value=isoToday();activeDay=(d.getDay()+6)%7;renderWorkout(true);loadSaved(false);window.scrollTo({top:0,behavior:'smooth'});};
document.getElementById('markAllSets').onclick=()=>markEveryExercise(true);
document.getElementById('clearAllSets').onclick=clearAllSetEntries;
document.getElementById('finishWorkout').onclick=showSimpleSummary;
