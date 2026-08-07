# Strength Companion 2.1

Local-first workout tracker with optional Firebase cloud synchronization.

## Existing-data preservation

This build intentionally retains the prior local-storage key: `strengthTrackerLocalV1`. When opened at the same GitHub Pages origin in the same browser, previously saved records appear automatically. Export a JSON backup from the old app before replacing files as an additional safeguard.

## GitHub Pages

Upload every file and folder in this package directly to the repository root. Use **Settings → Pages → Deploy from a branch → main → / (root)**.

## Firebase

1. Enable Google and/or Email/Password authentication.
2. Create Firestore.
3. Publish `firestore.rules`.
4. Add your `username.github.io` domain under Authentication → Settings → Authorized domains.
5. Paste the complete Firebase configuration block in the app's Cloud Sync page.

Cloud data is stored at `users/{uid}/workouts/{workoutId}`. Local saving continues to work without Firebase.

## GitHub Pages deployment
Upload every file and folder in this package directly to the repository root. Configure Pages as **Deploy from a branch → main → /(root)**. The root must contain `index.html`.

## Firebase configuration
Paste the complete `const firebaseConfig = { ... };` block into Cloud Sync. This build uses Firebase JS SDK 12.17.1 from the official CDN.
