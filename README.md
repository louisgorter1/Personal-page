# Personal-page

Static personal site served via GitHub Pages.

## Deploying

1. Push latest content to the `main` branch (`git add . && git commit -m "Update site" && git push origin main`).
2. In the repository settings on GitHub, open **Pages** and ensure *Build and deployment* is set to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy-pages.yml` copies the current site files into an artifact and publishes them to Pages. Each push to `main` (or a manual *Run workflow*) redeploys the site.
4. After the workflow finishes, the site is available at `https://louisgorter1.github.io/Personal-page/` (replace the username/repo if you fork).
