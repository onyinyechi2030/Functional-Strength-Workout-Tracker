Strength Companion v5.1

Dashboard cleanup: separate strength/recovery weekly totals, recovery minutes derived from activity durations, empty weekly grid removed.


v5.1 decouples dashboard rendering from workout UI initialization and reads saved weekly minutes directly from stored records.


v5.1 removes implicit DOM globals throughout the tracker and exposes the StrengthCompanion cloud API before initialization.


v5.1 fixes the missing addDays helper, separates dashboard sections so one error cannot blank all metrics, and hardens Recent Personal Bests.


v5.1 fully integrates multiple daily yoga and walking sessions into saving, dashboard totals, and Activity History. History filters are rebuilt and apply immediately.


v5.1:
- Yoga/Walking entry controls appear only in the Workout/Daily Log.
- Dashboard shows weekly Strength, Yoga, and Walking totals only.
- Weekly history shows Strength, Yoga, and Walking separately.
- The main Save Day button appears at the end of all daily activities and saves the complete day.


v5.1:
- Rebalanced to four strength days: Monday, Wednesday, Friday, Saturday (60–75 minutes).
- Tuesday, Thursday, Sunday are recovery days centered on Yoga and Walking.
- Friday is upper-body dominant so the Friday/Saturday back-to-back sessions do not heavily repeat lower-body loading.
- Dashboard and History retain explicit Strength Training, Yoga, and Walking categories.
- Cloud startup now merges remote and local records before uploading, preventing stale-device overwrite.
- Real-time cloud changes refresh Dashboard, History, Progress, and the relevant saved workout when safe.
- The active editing field is protected from immediate remote rerender.


v5.1 prospective schedule migration:
- The four-day strength schedule begins Monday, August 17, 2026.
- Dates before August 17 continue to use the prior five-day program.
- Historical saved records are not rewritten.
- Opening an earlier date displays the program that was in effect then.


v5.1 audited four-day program refinements:
- Preserves the prospective August 17, 2026 effective date and the legacy five-day schedule for earlier dates.
- Trims redundant weekly volume to better match the four-day recovery goal.
- Monday Reverse Lunge: 2 sets.
- Wednesday: RDL 3, Row 3, Hammer Curl 2, Suitcase Carry 2, Hip Thrust 2 sets.
- Friday: Curl 2, Face Pull 2, Floor Press 3, Triceps Extension 2 sets.
- Saturday removes Walking Dumbbell Lunge, adds Bear Crawl 2 x 20–30 sec, and uses 2 sets of Calf Raises.
- Maintains total-body strength, functional strength, posture, unilateral work, carries, shoulder stability, and multidirectional core training.


v5.1 rep-range refinement:
- Major compound lifts generally use 8–12 reps.
- Unilateral compound movements generally use 8–12 reps per side.
- Arm/accessory work generally uses 10–15 reps.
- Postural/shoulder-health work generally uses 12–20 reps.
- Core repetitions generally use 8–15 or 10–15 per side; carries/isometrics remain timed.
- Progress within the prescribed range before adding load; additional sets remain a later progression option.
- The prospective August 17, 2026 program cutoff and all historical/legacy program behavior remain unchanged.


v5.1:
- Adds Breathing Practice and Meditation as separate tracked daily categories.
- Both support multiple sessions per day, type dropdown, duration dropdown, optional notes, autosave, cloud sync, filters, dashboard totals, weekly history, and detailed History entries.
- Breathing includes Box, 4-7-8, Coherent/Resonance, Diaphragmatic, Extended-Exhale, Alternate-Nostril, and Other.
- Meditation includes Mindfulness, Breath, Body Scan, Loving-Kindness, Centering Prayer, St. Francis Prayer Meditation, Silent/Contemplative, Guided, and Other.
- Existing Strength, Yoga, Walking, prospective August 17 schedule transition, and historical records remain intact.


v5.1 audit corrections:
- Fixes a History rendering bug where breathing/meditation detail variables were referenced before definition.
- Dashboard diagnostic now summarizes all tracked categories rather than showing only session strength minutes.
- Weekly-history rows only count as having activity when a saved record actually contains tracked work/practice.
- Syntax, duplicate function names, duplicate HTML IDs, program cutoff, autosave bindings, dashboard cards, history filters, and cloud-sync structure were re-audited.


v5.1 prospective exercise substitution:
- Preserves all schedules and saved records through August 18, 2026.
- Beginning Wednesday, August 19, Wednesday's Bulgarian Split Squat becomes Walking Dumbbell Lunge, 3 x 8–12 per leg.
- No historical records are migrated or rewritten.
- All v4.5 tracking, dashboard, history, autosave, breathing/meditation, and cloud-sync behavior is retained.


v5.1 consolidated redesign — effective August 31, 2026
- New three-day Strength A/B/C program with Primary, Accessory and Optional recommendation tiers.
- Primary sets define workout completion; Accessory and Optional work can be distributed later in the day without lowering completion when skipped.
- Default schedule is Monday / Wednesday / Saturday, with week-specific reassignment of A/B/C to any three distinct weekdays (for example Tuesday / Thursday / Saturday).
- Weekly schedule settings synchronize through Firebase when signed in; schedule changes do not rewrite historical workouts.
- Historical program versions through August 30 remain intact and are selected by date.
- Yoga and Mobility are consolidated into one tracked category. Mobility includes stretching, flexibility and joint-mobility work outside formal yoga practice. Historical Yoga and programmed Mobility minutes remain readable.
- Walking adds Japanese Interval Walking, incline/treadmill hill walking, outdoor hill/hiking, intensity/type choices, indoor/outdoor setting, duration and notes. Dashboard still shows a single combined walking total.
- Exercise library rebuilt by category for realistic home training. Adds Band Face Pull, Dumbbell Biceps Curl, Alternating Dumbbell Curl, Dumbbell Sumo Squat and many additional squat, hinge, push, pull, posture, arm, core, carry, balance and functional variations.
- Fixes flexible-schedule strength minutes so a Thursday strength workout is counted as strength rather than recovery.
- Fixes the Add Additional Exercise path that could reference an undefined record variable.
- History stores and displays the actual calendar day plus Strength A/B/C slot, keeping tracking accurate when sessions move between weekdays.
- Safety backup now includes weekly schedule settings as well as activity records.


## v5.1 consolidated redesign
- Three-day flexible Strength A/B/C program effective 2026-08-31, default Monday/Wednesday/Saturday.
- Weekly or default reassignment of A/B/C to three distinct weekdays.
- Primary exercises determine completion; Accessory and optional recommendations expand volume without making the baseline incomplete.
- Comprehensive categorized home-training library including Sumo Squat, Band Face Pull, Dumbbell Biceps Curl and many alternatives.
- Yoga and non-yoga stretching/flexibility/mobility consolidated as Yoga & Mobility.
- Walking adds type, indoor/outdoor/treadmill setting, duration and notes while dashboard totals remain combined.
- Historical program versions and saved records remain intact; cloud sync includes schedule settings.


## v5.1 final audit and sync hardening
- Retains the August 31, 2026 prospective three-day Strength A/B/C redesign and all historical program boundaries.
- Adds a comprehensive home-training exercise library, including Dumbbell Biceps Curl, Hammer Curl, Band Face Pull, Sumo Squat and many additional alternatives.
- Consolidates Yoga and non-yoga stretching/flexibility work into Yoga & Mobility while preserving legacy Yoga and mobility minutes.
- Expands walking types and adds indoor/outdoor/treadmill setting per walking session while keeping Dashboard walking totals combined.
- Adds week-specific flexible scheduling of Strength A/B/C while preserving program-slot identity in History and completion tracking.
- Cloud sync now transmits only changed records instead of rewriting the entire history after every autosave.
- Startup always merges cloud and local records before any write. Newer cloud versions are protected from delayed stale writes using Firestore transactions.
- Cross-device deletions propagate safely when the cloud record has not been independently updated on another device.
- Flexible-schedule settings sync through the existing authorized workouts path, avoiding a new Firestore-rule dependency.
- Cloud changes refresh Dashboard, History and Progress while preserving an actively edited form.
- Flexible-schedule settings now use transaction-protected writes, so a stale device cannot overwrite newer schedule settings.
- Firebase browser modules are pinned to JS SDK 12.18.0, which includes the August 19, 2026 Authentication fix for background-tab/signInWithPopup “Database is closing/hidden” failures.
