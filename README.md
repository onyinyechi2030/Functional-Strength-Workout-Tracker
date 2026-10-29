# Strength Companion v6.0.3 — Release audit corrections

Fixes future-dated strength records incorrectly counting toward consistency; preserves newer settings when importing an older backup; aligns Activity Goals actuals with effective-date target windows; removes unused legacy dashboard calculation path.

Records, schedule schema, and Firebase integration are unchanged. Existing data is not intentionally migrated.

**Deployment:** Export a JSON backup from the live version before replacing GitHub Pages files. Live Firebase two-device sync has not been tested.
