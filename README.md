Strength Companion v3.4

Dashboard cleanup: separate strength/recovery weekly totals, recovery minutes derived from activity durations, empty weekly grid removed.


v3.4 decouples dashboard rendering from workout UI initialization and reads saved weekly minutes directly from stored records.


v3.4 removes implicit DOM globals throughout the tracker and exposes the StrengthCompanion cloud API before initialization.
