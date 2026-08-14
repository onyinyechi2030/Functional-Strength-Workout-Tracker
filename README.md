Strength Companion v4.3

Dashboard cleanup: separate strength/recovery weekly totals, recovery minutes derived from activity durations, empty weekly grid removed.


v4.3 decouples dashboard rendering from workout UI initialization and reads saved weekly minutes directly from stored records.


v4.3 removes implicit DOM globals throughout the tracker and exposes the StrengthCompanion cloud API before initialization.


v4.3 fixes the missing addDays helper, separates dashboard sections so one error cannot blank all metrics, and hardens Recent Personal Bests.


v4.3 fully integrates multiple daily yoga and walking sessions into saving, dashboard totals, and Activity History. History filters are rebuilt and apply immediately.


v4.3:
- Yoga/Walking entry controls appear only in the Workout/Daily Log.
- Dashboard shows weekly Strength, Yoga, and Walking totals only.
- Weekly history shows Strength, Yoga, and Walking separately.
- The main Save Day button appears at the end of all daily activities and saves the complete day.


v4.3:
- Rebalanced to four strength days: Monday, Wednesday, Friday, Saturday (60–75 minutes).
- Tuesday, Thursday, Sunday are recovery days centered on Yoga and Walking.
- Friday is upper-body dominant so the Friday/Saturday back-to-back sessions do not heavily repeat lower-body loading.
- Dashboard and History retain explicit Strength Training, Yoga, and Walking categories.
- Cloud startup now merges remote and local records before uploading, preventing stale-device overwrite.
- Real-time cloud changes refresh Dashboard, History, Progress, and the relevant saved workout when safe.
- The active editing field is protected from immediate remote rerender.


v4.3 prospective schedule migration:
- The four-day strength schedule begins Monday, August 17, 2026.
- Dates before August 17 continue to use the prior five-day program.
- Historical saved records are not rewritten.
- Opening an earlier date displays the program that was in effect then.


v4.3 audited four-day program refinements:
- Preserves the prospective August 17, 2026 effective date and the legacy five-day schedule for earlier dates.
- Trims redundant weekly volume to better match the four-day recovery goal.
- Monday Reverse Lunge: 2 sets.
- Wednesday: RDL 3, Row 3, Hammer Curl 2, Suitcase Carry 2, Hip Thrust 2 sets.
- Friday: Curl 2, Face Pull 2, Floor Press 3, Triceps Extension 2 sets.
- Saturday removes Walking Dumbbell Lunge, adds Bear Crawl 2 x 20–30 sec, and uses 2 sets of Calf Raises.
- Maintains total-body strength, functional strength, posture, unilateral work, carries, shoulder stability, and multidirectional core training.


v4.3 rep-range refinement:
- Major compound lifts generally use 8–12 reps.
- Unilateral compound movements generally use 8–12 reps per side.
- Arm/accessory work generally uses 10–15 reps.
- Postural/shoulder-health work generally uses 12–20 reps.
- Core repetitions generally use 8–15 or 10–15 per side; carries/isometrics remain timed.
- Progress within the prescribed range before adding load; additional sets remain a later progression option.
- The prospective August 17, 2026 program cutoff and all historical/legacy program behavior remain unchanged.
