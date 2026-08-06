# Strength Workout Tracker — Cloud v11

A local-first GitHub Pages PWA for the five-day strength program and Thursday/Sunday recovery tracking. Firebase is optional and used only to synchronize workout records across devices.

## GitHub Pages
Upload all files and folders to the repository root. In **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)`.

## Firebase
1. Register a Firebase Web App.
2. Enable Google and/or Email/Password under Authentication.
3. Create Cloud Firestore.
4. Publish the contents of `firestore.rules`.
5. Add your GitHub Pages domain under Authentication → Settings → Authorized domains.
6. Open the tracker → Cloud Sync and paste the Firebase web configuration.

Local data is retained even when cloud sync is not configured or the user is signed out.
