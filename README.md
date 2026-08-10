Strength Companion v3.5

Dashboard cleanup: separate strength/recovery weekly totals, recovery minutes derived from activity durations, empty weekly grid removed.


v3.5 decouples dashboard rendering from workout UI initialization and reads saved weekly minutes directly from stored records.


v3.5 removes implicit DOM globals throughout the tracker and exposes the StrengthCompanion cloud API before initialization.


v3.5 fixes the missing addDays helper, separates dashboard sections so one error cannot blank all metrics, and hardens Recent Personal Bests.
