# Strength Companion v6.0.6 — History and Progress audit

History
- Search box: finds days by notes, exercises you performed, activities, dates or weekday.
- Shows RPE (effort) and energy before/after for each day, and an average RPE in the summary.
- Strength filter and totals now include any strength day where sets were logged, even if no total minutes were typed; the summary says how many days have no time entered.
- Days are grouped by month, with friendlier dates, a "Showing N of M days, date to date" line, and one line per set ("Set 1: 20 lb × 12").
- "Program completion" is now "Planned sets done", with the set counts.

Progress
- Weekly chart opens on the most recent weeks (it used to open on the oldest on phones), shows month/day labels, marks the current week and weeks with nothing logged, and adds a one-line summary (average, best, this week so far).
- Fixed: on Sunday evenings the chart could treat next week as the current week (it used UTC for the date).
- Exercise progression: starts on your most-logged exercise; the list is split into logged and not-logged; newest first; "Top set" replaces separate max columns; PR markers; summary cards for sessions, best set and change.
- No change to saved data or sync.

# Strength Companion v6.0.5 — Goals start on Mondays

- Activity goals are now prospective: a saved goal takes effect the following Monday, so each week is measured against one goal. The current week and past weeks keep their existing goals. The old "take effect on" date picker is gone.
- Overview > Activity goals > "This month": each activity shows the month's total (active days, minutes) plus a bar and percentage against the whole month's goal. Only activity on days a goal applied counts toward the bar; the total always shows everything.
- This week shows your full weekly goal (v6.0.4).
- No change to saved records or sync. Goal history keeps using effective dates.

# Strength Companion v6.0.4 — Clearer activity goals

- Overview > Activity goals: "This week" now compares you with your full weekly goal (for example "1 of 3 days", "40 of 60 min") instead of a part-week fraction such as "1 of 0.7 days". "Month so far" still adds up goals for the days that have passed, but rounds to whole numbers.
- No change to saved data, goals or sync.

# Strength Companion v6.0.3 — Audit fixes

Quality pass on v6.0.2. No change to saved data, records or cloud sync.
- Fixed: the History "weekday" filter only ever offered "All days" (a latent bug carried over from v5.7.1); it now lists Monday–Sunday.
- Accessibility: darker secondary text so it meets contrast guidelines on white and pale backgrounds; active day label is fully opaque; "Add an exercise" fields have proper labels; the page header is a real landmark; exercise group headings follow heading order; the weekly chart and progress table can be scrolled with the keyboard; the sync chip is a larger tap target.

# Strength Companion v6.0.2 — Teal, airier layout

Visual refinement of the v6.0.0 redesign. Presentation only; no logic, data or sync changes.
- Teal palette (light and dark), with a distinct color for each activity on the Overview.
- More white space: wider gutters, larger gaps between sections, and quieter rows (hairline dividers) in place of boxed panels. Summary tiles and cards use a soft shadow instead of outlines.
- Slightly narrower reading width on desktop; roomier set fields on phones.

# Strength Companion v6.0.0 — Interface redesign

A calmer, mobile-first interface built on the unchanged v5.7.1 data, program and sync logic.

## What changed
- **Navigation:** seven tabs became five (Today, Overview, History, Progress, Settings). On phones they sit in a bottom bar; Goals, Cloud sync, Backup and About now live under Settings. A small status chip in the header shows whether cloud sync is on.
- **Today:** one clear heading (weekday, focus, session), a compact week strip with today and saved days marked, and the exercises up front. Warm-up, cool-down, weekly schedule, extra exercises, form cues and exercise swaps are collapsed until needed. Each exercise shows a row of "set pips" that fill as you log. A sticky bar keeps Primary-set progress and **Save day** in reach.
- **Sets:** only the columns an exercise uses are shown (reps or seconds, not both). Per-set notes sit behind a note icon and open automatically when a note exists.
- **Movement and mindfulness:** yoga, walking, breathing and meditation are four collapsible rows that show today's minutes.
- **Overview:** three headline numbers, time-by-activity bars, goals (with a prompt to set them if none exist), recent personal bests, and the detailed strength and weekly tables tucked into expandable sections. Weeks with no activity are no longer listed.
- **History:** two filters up front (activity, period), the rest under "More filters"; each day's exercise list collapses.
- **Look:** new type scale, spacing and colors, with automatic dark mode and larger tap targets.

## Behavior fixes found while testing
- "Save and show summary" now shows the summary. Previously `save()` returned nothing, so the summary code never ran, and it referenced a helper (`exerciseBest`) that did not exist.
- "Clear all set entries" now refreshes the progress display immediately.
- Save and load confirmations are brief on-screen messages instead of blocking pop-ups. Delete and clear confirmations still ask first.

## Unchanged
Storage key, record format, backup JSON, program definitions, goal calculations, dashboard math and Firebase sync (`firebase-sync.js`, `firestore.rules`). Saved records from the original and redesigned apps were compared after identical scripted input and were identical.

## Verification
Scripted browser tests (Chromium) covered day navigation, mark/clear sets, exercise swap, custom exercise, save and summary, History open and filters, settings panes, backup export, and horizontal overflow at 320, 390, 768 and 1280 px, with no script errors. **Not tested:** live Firebase sign-in and two-device sync, importing an older backup, and real iOS or Android devices. Export a backup before deploying.

# Strength Companion v5.7.1 — Audited pre-deployment release

This release supersedes v5.7.0. Corrections made after source review:
- Fixed the Activity Goals effective-date validation regex, which prevented saving goals.
- Corrected Yoga/Mobility aggregation to include legacy mobility entries alongside modern sessions without duplicating modern yoga entries.
- Corrected the main weekly dashboard card to use the new Primary volume calculation instead of the older, inconsistent completion formula.
- Explicitly handles zero goal targets as disabled, rather than displaying an undefined percentage.
- Updated asset cache query parameters and visible version to 5.7.1.

Automated checks: JavaScript syntax (both modules); ZIP integrity; isolated Node VM tests of goal saving, multiple sessions on the same day, prospective goal changes, partial-week target calculation, and legacy mobility minutes. **Not tested:** end-to-end browser interaction, actual Firebase synchronization on two devices, or full historical-data migration. Save a JSON backup before deploying and confirm goals, records and dashboard after upload.

Known limitation: activity goals are reported as prorated weekly equivalents through today (including fractional day targets), not as whole-number scheduled activity days. Monthly target equivalents use elapsed days/7 and can be fractional. A later enhancement could provide more intuitive integer-day targets. The goal system does not introduce new independent daily activity records; multiple sessions are stored in existing date-based activity arrays.

# Strength Companion v5.7.0 — Activity Goals + Primary Volume

## New Activity Goals
A new **Activity Goals** tab allows separate weekly **active-day** and **total-minute** targets for Yoga/Mobility, Walking, Meditation, and Breathing Exercises. Neither requires a minimum session length. Blank targets are disabled independently; zero is a valid explicit target. Each goal change has an effective date (today or later); earlier goal versions remain in the settings history.

The Dashboard includes **This week** and **This month to date** activity-goal summaries. Multiple sessions on a date contribute all minutes but count as one active day. Target values are prorated by elapsed days under each effective goal version, so a midweek change or midmonth start does not create a retroactive requirement. A 6-day/week goal, for example, is displayed as 6/7 of a day per elapsed day; fractional due targets are intentional. Actual performance can exceed 100%, and progress bars visually cap at 100%.

## Preserved functionality
Includes the v5.6.0 stacked Primary-set volume design. Existing activity logging, history, records, workout program boundaries, and Firebase sync implementation are preserved. Goal history is carried in the existing settings payload and backup JSON (no new Firestore collection or rules). Existing backups without goals remain importable.

## Verification
Both JS files pass `node --check`; deployment ZIP integrity checked. Live browser interaction and Firebase multi-device tests have not been performed. Export a safety backup before deployment.

# Strength Companion v5.6.0 — Primary Volume Achievement

## Dashboard change
Both **This week** and **This month to date** show a stacked Primary-set bar:
- Numerator: best logged Primary sets for each required A/B (or historical required A/B/C) slot in its week, plus Primary sets recorded in the optional Strength C (or historical optional D) slot.
- Denominator: scheduled required Primary sets due through the current day, using the historically applicable program prescriptions and saved weekly schedule overrides.
- Optional C contributes to the volume numerator but never changes the required-session consistency metric.
- The volume percentage can exceed 100%; the bar is capped visually while the numeric percentage is not.
- A completed set is credited only when recorded in the existing workout data. Duplicate saves of the same slot/week do not double-count Primary volume.
- Accessory sets and Optional Additions retain separate counts.

## Compatibility
No workout records are rewritten. The local storage key, backup schema, cloud synchronization module, and Firestore rules are unchanged. Earlier program definitions remain available by date. The app badge reads v5.6.0.

## Testing
JavaScript syntax, scenario-based volume calculations (including partial required and optional C sets, duplicate entries, future scheduled sessions, historical month transitions), and ZIP integrity were checked. Live browser UI and multi-device Firebase synchronization were not tested.

Strength Companion v5.5.2 — Dashboard labeling correction

The 'This week' and 'This month to date' breakdowns now show 'Primary sets completed' and 'Accessory sets completed' as the main values. The detail explains that the prescribed-set denominator applies only to logged workouts, not missed scheduled sessions. This is a display-only change: history, saved records, Firebase synchronization, and backup formats are unchanged.

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


## v5.2 — Optional Strength D
- Adds Strength D — Optional Strength & Resilience prospectively beginning September 28, 2026.
- A/B/C remain the required weekly program and continue to determine 3/3 completion.
- D defaults to Friday, is independently movable in the weekly scheduler, and contributes to strength minutes, history, progress and PRs without lowering adherence when skipped.
- D is a substantive but lower-fatigue full-body session designed to work as an occasional bonus now and to remain usable as a regular fourth slot in the future.
- D uses accessible programmed defaults with explicitly labeled harder progression/alternatives. The default and progression occupy the same programmed movement slot: choose one, not both, and either receives the same completion credit.
- Existing A/B/C schedule settings migrate automatically. If an older custom schedule already uses Friday, D is placed on an unused day while preserving A/B/C.
- Historical weeks before September 28, 2026 retain the prior A/B/C program and do not retroactively display D.
- Firebase schedule sync continues through the existing settings document and workout collection architecture.

## v5.3 — Two-day full-body program (effective October 19, 2026)

Starting October 19, 2026, the required weekly schedule is Strength A (Monday) and Strength B (Thursday), both comprehensive full-body sessions. The default weekdays may be customized by week or as a default; previous A/B/C/D weeks and historical workouts are not modified. Two-day schedules use separate local/cloud-synchronized settings keys. The weekly Dashboard and Progress denominators adapt to the program effective for that week (2 sessions after October 19; prior requirements for historical weeks).

Each day has 18–19 Primary sets, 6 Accessory sets, optional additions, and visible substitution/progression alternatives. A progression replaces its default movement; it is not an additional requirement. All activity categories and Firebase sync remain in place.

## v5.3.2 — Schedule editor visibility correction

For dates October 19, 2026 onward, Weekly Strength Schedule displays only Strength A and B. CSS now explicitly honors the `hidden` attribute on grid labels, which previously conflicted with the schedule-grid flex styling. Earlier dates retain historical C/D schedule options. A/B schedule changes refresh the correct selected date and weekday.

## v5.4.0 — Optional comprehensive Strength C (October 26, 2026)

- Effective **2026-10-26**, Strength A and B remain the only required sessions (weekly target 2/2); a new **optional** full-body Strength C is scheduled on Saturday by default.
- Strength C: **19 Primary sets** and **6 Accessory sets**, plus optional additions and clearly identified substitution-only progression alternatives. The final Pallof Press prescription is 2 sets; this makes the final total 19 rather than the preliminary 18.
- Schedule editor shows A, B and optional C for dates from October 26, and supports weekly overrides and default-day changes. All three must occupy distinct days.
- The optional C day is stored in new, additive localStorage settings keys (`strengthCompanionOptionalCDefaultV1`, `strengthCompanionOptionalCOverridesV1`), included in backup exports and existing Firebase settings payloads. Prior keys and existing workout records are unchanged.
- Earlier programs are date-versioned: before Oct 19, the historical A/B/C and optional D; Oct 19–25, two-day A/B; Oct 26 onward, required A/B and optional C.
- Do not rename historical records or clear browser storage during deployment. Export a JSON backup before replacing the GitHub Pages files.
- Validation: JavaScript syntax, historical schedule transitions, optional C scheduling, reset/default/override, required-slot denominator, and set totals. Browser interaction and live Firebase cross-device behavior should be verified after deployment.


## v5.5.0 dashboard summary (October 26, 2026)
- Replaces misleading logged-only monthly percentage with month-to-date required strength consistency, using scheduled due dates and program-specific required slots.
- Adds read-only week/month breakdown of Primary, Accessory, custom Optional Addition sets, and completed optional Strength C/D sessions.
- Historical records without a category are displayed as unclassified rather than retroactively assigned.
- No storage schema, record IDs, backup format, or Firebase synchronization protocol changed.
- Optional additions are logged through the existing Add Exercise form; exercise substitutions retain the original priority.
