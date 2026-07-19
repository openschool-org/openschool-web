import {readdirSync, readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const featuresDir = join(__dirname, '..', 'src', 'data', 'features');
const outDir = join(__dirname, '..', 'src', 'data', 'generated');
const outFile = join(outDir, 'features.ts');

const files = readdirSync(featuresDir).filter((f) => f.endsWith('.md'));

const items = files.map((file) => {
  const raw = readFileSync(join(featuresDir, file), 'utf8');
  const {data, content} = matter(raw);
  const items = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2).trim());

  return {
    slug: file.replace(/\.md$/, ''),
    title: data.title,
    icon: data.icon,
    order: data.order,
    group: data.group,
    homeFeatured: Boolean(data.homeFeatured),
    summary: data.summary,
    items,
  };
});

items.sort((a, b) => a.order - b.order);

const banner = '// GENERATED FILE — do not edit directly.\n// Source of truth: src/data/features/*.md\n// Regenerate with `npm run generate:content`.\n\n';

const body = `export type FeatureIcon =
${[...new Set(items.map((i) => `  | '${i.icon}'`))].join('\n')};

export type FeatureGroup = 'foundation' | 'structure' | 'people' | 'operations';

export type Feature = {
  slug: string;
  title: string;
  icon: FeatureIcon;
  order: number;
  group: FeatureGroup;
  homeFeatured: boolean;
  summary: string;
  items: string[];
};

const features: Feature[] = ${JSON.stringify(items, null, 2)};

export default features;
`;

mkdirSync(outDir, {recursive: true});
writeFileSync(outFile, banner + body);

console.log(`Generated ${outFile} from ${items.length} markdown files.`);
