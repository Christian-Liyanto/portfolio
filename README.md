# Christian Liyanto — portfolio

Personal site for gameplay work. Built with React, React Router Framework Mode, TypeScript, Vite, and Tailwind CSS 4. The pages are statically pre-rendered and hosted on GitHub Pages.

Live (after Pages is enabled): https://christian-liyanto.github.io/portfolio/

## Run locally

```bash
npm ci
npm run dev
```

Create and preview the GitHub Pages build:

```bash
npm run build
npm run preview
```

Project details, metadata, and rich page content live in `src/data/projects.tsx`.

## Videos

Source captures stay on disk and are gitignored (`MeowQuest_1.mp4`, etc.). Web-sized versions live in `public/videos/`.

To rebuild compressed files after replacing a source clip:

```powershell
$ff = (Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Recurse -Filter ffmpeg.exe | Select-Object -First 1).FullName
```

Then re-run the scale / CRF encode into `public/videos/`.
