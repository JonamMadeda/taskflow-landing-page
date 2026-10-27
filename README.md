# TaskFlow Landing Page

Marketing site for [TaskFlow](../taskflow), the offline-first, dark-mode Android
to-do app. Built with React 19, Vite and Tailwind CSS v4.

## APK download

The release APK is served as a static asset from:

```text
public/downloads/taskflow-v1.0.0.apk
```

Every "Download APK" button on the page links to
`/downloads/taskflow-v1.0.0.apk` and uses the HTML `download` attribute, so the
file downloads instead of opening in the browser.

Current release details:

| Field | Value |
| --- | --- |
| Version | 1.0.0 |
| Size | 48 MB (50,296,612 bytes) |
| Requires | Android 7.0+ |
| Package | `com.taskflow.taskflow` |
| SHA-256 | `13ff92061ada80762ed37946e8391a23480027fc5ed74aa7897deddc5579e600` |

### Replacing the APK with a new build

1. Build a fresh APK in the Flutter app:

   ```bash
   cd ../taskflow
   flutter build apk --release
   ```

2. Copy it into `public/downloads/`, naming it after the new version:

   ```powershell
   Copy-Item ..\taskflow\build\app\outputs\flutter-apk\app-release.apk `
     public\downloads\taskflow-v1.1.0.apk
   ```

3. Update the constants at the top of `src/App.jsx`:

   ```js
   const VERSION = '1.1.0'
   const APK_PATH = '/downloads/taskflow-v1.1.0.apk'
   const APK_SIZE = '48 MB'
   const APK_SHA = '<new sha256>'
   ```

   Get the hash with:

   ```powershell
   Get-FileHash public\downloads\taskflow-v1.1.0.apk -Algorithm SHA256
   ```

4. Rebuild the site:

   ```bash
   npm run build
   ```

## Development

```bash
npm install
npm run dev
```

Vite serves the page at `http://localhost:5173` by default.

## Production build

```bash
npm run build
npm run preview
```

The output is written to `dist/`. The APK is copied to
`dist/downloads/taskflow-v1.0.0.apk` automatically because it lives in `public/`.

## Deploying

Publish the contents of `dist/` to any static host (GitHub Pages, Netlify,
Cloudflare Pages, Vercel, S3). Keep the `downloads/` directory intact so the APK
URL keeps working.

If the site is served from a sub-path instead of a domain root, set Vite's
`base` option in `vite.config.js` and prefix the `APK_PATH` constant to match.

## Notes

- The page is a single document: `src/App.jsx`. Shared styling and animations
  live in `src/index.css`.
- The phone mockups are HTML/CSS replicas of the real Flutter UI; there are no
  screenshot images to maintain.
- Release APKs built by the Flutter project are currently signed with the debug
  keystore, which is fine for sideloading but not for Google Play. Configure a
  private keystore before publishing to the store.
