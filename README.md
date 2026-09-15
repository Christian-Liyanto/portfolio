# Christian Liyanto — portfolio

Personal site for gameplay work. Built with [Astro](https://astro.build) and Tailwind, hosted on GitHub Pages.

Live (after Pages is enabled): https://christian-liyanto.github.io/portofolio/

## Run locally

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages, free)

Pages is **not on by default**. If deploy fails with `HttpError: Not Found` / `Failed to create deployment (status: 404)`, turn it on first:

1. Open [Settings → Pages](https://github.com/Christian-Liyanto/portofolio/settings/pages).
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Save. The repo must stay **public** on a free GitHub account.
4. **Actions → Deploy to GitHub Pages → Run workflow** on `main`.

Live URL: https://christian-liyanto.github.io/portofolio/

The Node 20 note in the log is a warning. The 404 is Pages not being enabled.

## Videos

Source captures stay on disk and are gitignored (`MeowQuest_1.mp4`, etc.). Web-sized versions live in `public/videos/`.

To rebuild compressed files after replacing a source clip:

```powershell
$ff = (Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Recurse -Filter ffmpeg.exe | Select-Object -First 1).FullName
```

Then re-run the scale / CRF encode into `public/videos/`.
