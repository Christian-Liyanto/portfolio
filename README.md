# Christian Liyanto — portfolio

Personal site for gameplay work. Built with [Astro](https://astro.build) and Tailwind, hosted on GitHub Pages.

Live (after Pages is enabled): https://christian-liyanto.github.io/portfolio/

## Run locally

```bash
npm install
npm run dev
```

## Videos

Source captures stay on disk and are gitignored (`MeowQuest_1.mp4`, etc.). Web-sized versions live in `public/videos/`.

To rebuild compressed files after replacing a source clip:

```powershell
$ff = (Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Recurse -Filter ffmpeg.exe | Select-Object -First 1).FullName
```

Then re-run the scale / CRF encode into `public/videos/`.
