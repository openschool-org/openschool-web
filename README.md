# openschool-web

Public site for [OpenSchool](https://github.com/openschool-org/openschool) — a free, open-source, self-hosted school management system built for Sri Lankan schools. Built with [Docusaurus](https://docusaurus.io).

Seven marketing pages (Home, About, Features, Modules, Community, Changelog, Privacy) plus a real `/docs` section covering setup and architecture, sourced from `docs/*.md` and `docs/adr/*.md` (Docusaurus's docs plugin, configured via `sidebars.ts`).

Feature/module copy on the Features/Modules pages lives in `src/data/features/*.md` (Markdown with frontmatter), compiled into `src/data/generated/features.ts` automatically before every `start`/`build` via `npm run generate:content` — edit the `.md` files, not the generated one. Keep it in sync with the source project's `docs/FEATURES.md`.

The Changelog page has no local content to edit — `npm run generate:content` fetches releases live from the GitHub Releases API for `openschool-org/openschool` and compiles them into `src/data/generated/changelog.ts`. A successful fetch also refreshes the committed `src/data/changelog-cache.json`, which is used as a fallback if the API is unreachable or rate-limited (e.g. offline development), so a new GitHub release shows up on the site automatically on the next build with no manual step. Set a `GITHUB_TOKEN` env var locally if you hit the anonymous rate limit (60 req/hour) — CI already passes one.

## Development

```bash
npm install
npm start      # dev server at localhost:3000
npm run build   # production build to ./build
npm run serve   # preview the production build
```
