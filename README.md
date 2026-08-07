# Strength Companion 2.2

GitHub Pages-ready local-first strength and recovery tracker.

## Changes in 2.2
- The workout date now determines the weekday automatically.
- Clicking a weekday changes the date to that weekday within the selected week.
- Thursday and Sunday use recovery-specific activity cards with yoga type, duration in minutes, completion, and notes only.
- Walking and mobility remain optional and do not reduce recovery-day completion if skipped.
- Meaningful edits save locally after a short delay. When signed in to Firebase, those saved changes synchronize automatically.

## GitHub Pages
Upload all files and folders to the repository root. Configure Pages as **Deploy from a branch → main → /(root)**.

## Firebase
Paste the complete `const firebaseConfig = { ... };` block in Cloud Sync, save it, and sign in. Publish the included `firestore.rules`.
