Strength Companion v3.9

Dashboard cleanup: separate strength/recovery weekly totals, recovery minutes derived from activity durations, empty weekly grid removed.


v3.9 decouples dashboard rendering from workout UI initialization and reads saved weekly minutes directly from stored records.


v3.9 removes implicit DOM globals throughout the tracker and exposes the StrengthCompanion cloud API before initialization.


v3.9 fixes the missing addDays helper, separates dashboard sections so one error cannot blank all metrics, and hardens Recent Personal Bests.


v3.9 fully integrates multiple daily yoga and walking sessions into saving, dashboard totals, and Activity History. History filters are rebuilt and apply immediately.


v3.9:
- Yoga/Walking entry controls appear only in the Workout/Daily Log.
- Dashboard shows weekly Strength, Yoga, and Walking totals only.
- Weekly history shows Strength, Yoga, and Walking separately.
- The main Save Day button appears at the end of all daily activities and saves the complete day.
