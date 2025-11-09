# Personal-page

A single-page portfolio for Louis Gorter built with React 19, TypeScript, and Vite. The layout mirrors the calm hardware aesthetic of the previous static page but now benefits from reusable components, typed content data, and subtle interaction flourishes.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173` to preview changes. Content is driven by `src/data/content.ts`, so updating copy or adding entries only requires editing the JSON-like objects there.

## Production Build

```bash
npm run build
```

The production-ready bundle lands in `dist/`. Preview it locally with `npm run preview`.

## Deployment (GitHub Pages)

1. Ensure GitHub Pages is enabled for the repository (Settings → Pages → Build & deployment → **GitHub Actions**).
2. Push to `main`. The workflow at `.github/workflows/deploy-pages.yml` installs dependencies, builds the Vite app, and publishes the `dist/` artifact with the official Pages actions.
3. Track progress under the **Actions** tab. When the run is green, the site is live at `https://louisgorter1.github.io/Personal-page/`.

## Tech Highlights

- React + TypeScript components with centralized content data.
- Intersection Observer powered `Reveal` component that honours `prefers-reduced-motion`.
- Modern gradient aesthetic inspired by industrial design launch pages.
- Automated GitHub Pages deployments via Actions with Node 22 and cached npm installs.
