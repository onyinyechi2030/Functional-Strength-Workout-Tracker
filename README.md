Strength Companion v4.0

Dashboard cleanup: separate strength/recovery weekly totals, recovery minutes derived from activity durations, empty weekly grid removed.


v4.0 decouples dashboard rendering from workout UI initialization and reads saved weekly minutes directly from stored records.


v4.0 removes implicit DOM globals throughout the tracker and exposes the StrengthCompanion cloud API before initialization.


v4.0 fixes the missing addDays helper, separates dashboard sections so one error cannot blank all metrics, and hardens Recent Personal Bests.


v4.0 fully integrates multiple daily yoga and walking sessions into saving, dashboard totals, and Activity History. History filters are rebuilt and apply immediately.


v4.0:
- Yoga/Walking entry controls appear only in the Workout/Daily Log.
- Dashboard shows weekly Strength, Yoga, and Walking totals only.
- Weekly history shows Strength, Yoga, and Walking separately.
- The main Save Day button appears at the end of all daily activities and saves the complete day.


v4.0:
- Rebalanced to four strength days: Monday, Wednesday, Friday, Saturday (60–75 minutes).
- Tuesday, Thursday, Sunday are recovery days centered on Yoga and Walking.
- Friday is upper-body dominant so the Friday/Saturday back-to-back sessions do not heavily repeat lower-body loading.
- Dashboard and History retain explicit Strength Training, Yoga, and Walking categories.
- Cloud startup now merges remote and local records before uploading, preventing stale-device overwrite.
- Real-time cloud changes refresh Dashboard, History, Progress, and the relevant saved workout when safe.
- The active editing field is protected from immediate remote rerender.
