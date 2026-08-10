# openschool-web

Public site for [OpenSchool](https://github.com/openschool-org/openschool) — a free, open-source, self-hosted school management system built for Sri Lankan schools. Built with [Docusaurus](https://docusaurus.io).

Six marketing pages (Home, About, Features, Modules, Community, Privacy) plus a real `/docs` section covering setup and architecture, sourced from `docs/*.md` and `docs/adr/*.md` (Docusaurus's docs plugin, configured via `sidebars.ts`).

Feature/module copy on the Features/Modules pages lives in `src/data/features/*.md` (Markdown with frontmatter) and is compiled into `src/data/generated/features.ts` automatically before every `start`/`build` via `npm run generate:content` — edit the `.md` files, not the generated one. Keep it in sync with the source project's `docs/FEATURES.md`.

## Development

```bash
npm install
npm start      # dev server at localhost:3000
npm run build   # production build to ./build
npm run serve   # preview the production build
```
