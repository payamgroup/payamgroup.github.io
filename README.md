# Payam Research Group — SCMS website

Scientific Computing for Materials and Structures (SCMS), hosted at https://payamgroup.github.io/.

## Requirements

- Node.js **22.23.4 or newer** (the version required by this project's `package.json`)
- npm

## Install and run locally

```bash
npm ci
npm run dev
```

Open http://localhost:4321/.

## Verify the production build

```bash
npm run build
npm run preview
```

Astro produces the static site in `dist/`, which is intentionally not committed.

## Project map

- `src/layouts/BaseLayout.astro` — navigation, footer, global typography and reveal effects.
- `src/components/PageInteractions.astro` — scroll progress, text and button interactions.
- `src/components/BackToTop.astro` — floating back-to-top button.
- `src/pages/index.astro` — homepage.
- `src/pages/research.astro` — research theme overview.
- `src/pages/research/[slug].astro` — dynamically generates the four theme pages.
- `src/pages/people.astro` — group leader, students and alumni.
- `src/pages/publications.astro` — searchable publication catalogue.
- `src/data/researchThemes.js` — four research themes.
- `src/data/researchProjects.js` — ten projects, images, captions and related paper IDs.
- `src/data/publications.js` and `src/data/additionalPublications.js` — publication records and cover references. Keep IDs intact as project pages rely on them.
- `src/data/people.js` — people profiles and student/alumni data.
- `public/images/projects/` — project images (PNG files in this archive).
- `public/images/publications/` — book, report and special issue cover images.
- `public/images/research/` — published Figure 1 for the bio-inspired theme.

## Deployment to GitHub Pages

The `site` in `astro.config.mjs` is set to `https://payamgroup.github.io` for the `payamgroup.github.io` user website.
This ZIP does **not** contain a GitHub Actions deployment workflow. Configure GitHub Pages deployment (for example, using an Astro GitHub Actions workflow) when uploading to GitHub. Verify your repository and Pages settings before making the site public.

## Cleanup

Read `CLEANUP_REPORT.md` for the removed items, verification results, and two cover images to review. The original uploaded ZIP has not been changed.
