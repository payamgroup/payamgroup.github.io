# Website cleanup report — 3 November 2026

## Scope

Reviewed the uploaded `Archive.zip` as the authoritative project state. Built a fresh **allowlisted copy** rather than deleting anything from the original archive. Content, image paths, publication records, publication IDs, theme slugs, professional appointments and existing page styles were preserved.

## Removed from the cleaned copy

| File or folder | Reason |
|---|---|
| `node_modules/` | Install locally with `npm ci`; should not be stored in Git. The original archive included a macOS dependency tree. |
| `__MACOSX/`, `._*`, `.DS_Store` | Finder metadata, not site files. |
| `.astro/`, `dist/` | Generated development/build output. |
| `backups/` and `src/**/*.backup.txt` | Historical drafts, not imported by the live website. The untouched original ZIP remains available as a backup. |
| `src/components/ThemePublications.astro` | Retired “Further Publications Related to This Theme” component; not imported by active pages. |
| `src/data/themePublicationIds.js` | Used only by the retired component above. |
| `src/data/projects.js` | Obsolete project data used only by an old backup page. Current theme pages use `researchProjects.js`. |
| `public/images/gyroid.png` | No references in the active website code or data. |
| `.vscode/` | Optional local editor settings, not part of the deployable website. |
| `AGENTS.md` | Local development instruction file, not needed for running or publishing the site. |
| Original `README.md` | Generic Astro starter README, replaced with project-specific instructions. |

Empty directories were not packaged.

## Minimal functional adjustment

- The original site had **two overlapping reading-progress bars**, one in `BackToTop.astro` and one in `PageInteractions.astro`.
- Updated `BackToTop.astro` to provide **only the existing back-to-top button**. `PageInteractions.astro` remains the single scroll progress indicator. The global layout continues importing both components.
- No changes to the page content, research data, images, or bibliography metadata.

## Retained

- All five active Astro page templates, including `research/[slug].astro` for four themes.
- All five used research, people and publication data modules.
- All ten project image assets; all current image paths point to existing files.
- Group-leader photo, brand logos, all publication cover files, Figure 1, and both favicons.
- Both scrolling interaction components (with duplicated progress removed), global layout and responsive CSS.
- `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, and expanded `.gitignore`.

## Validation

- Compared all project `publicationIds` with the combined publication arrays: **no dangling IDs**.
- Ten projects across four research themes: **2, 2, 3, 3**.
- Publication arrays total **72 unique IDs** (4 core + 68 additional).
- All referenced project images, group-leader image and publication-cover files exist.
- The Bio-inspired Figure 1 image exists.
- Checked relative imports and referenced site assets for missing files.
- **Full Astro build not verified here:** the archive's dependencies were installed for macOS; this container has Node.js 22.16.0 whereas `package.json` requires Node.js >=22.23.4. The Astro CLI refuses to run on this container's runtime. Run `npm ci` and `npm run build` locally with a supported Node version after extracting.

## User review needed before publication

- `public/images/publications/special-engineering-modelling.png` and `special-data-driven-engineering.png` are byte-identical despite referencing **different** journal special issues. Both are retained to avoid broken references. Check that the correct cover belongs to each issue.
- The supplied archive contains no `.github/workflows/` deployment configuration. GitHub Pages deployment still needs to be configured when publishing.
- Before making the site public, confirm reuse permissions for published figures and covers as appropriate.
