# openschool-web

Marketing site for OpenSchool — Digital Infrastructure for Sri Lankan Schools. Built with [Docusaurus](https://docusaurus.io).

Five pages: Home, About, Features, Modules, Contact. Feature/module copy lives in `src/data/features/*.md` (Markdown with frontmatter) and is compiled into `src/data/generated/features.ts` automatically before every `start`/`build` via `npm run generate:content` — edit the `.md` files, not the generated one.

## Development

```bash
npm install
npm start      # dev server at localhost:3000
npm run build   # production build to ./build
npm run serve   # preview the production build
```
