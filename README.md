Strength Companion v3.7

Dashboard cleanup: separate strength/recovery weekly totals, recovery minutes derived from activity durations, empty weekly grid removed.


v3.7 decouples dashboard rendering from workout UI initialization and reads saved weekly minutes directly from stored records.


v3.7 removes implicit DOM globals throughout the tracker and exposes the StrengthCompanion cloud API before initialization.


v3.7 fixes the missing addDays helper, separates dashboard sections so one error cannot blank all metrics, and hardens Recent Personal Bests.


v3.7 adds optional yoga and walking tracking on every day, separate yoga/walking history totals, and immediate history filtering.


v3.7 replaces yoga and walking duration typing with 5-minute dropdowns from 5–120 minutes while preserving unusual previously saved durations.
