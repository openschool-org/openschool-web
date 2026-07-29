# OpenSchool Design System

A premium, minimalist SaaS design language — **Apple / Linear / Vercel inspired**: white canvas, black CTAs, a restrained indigo accent, thin hairline borders, soft diffuse shadows, and generous 8pt-scale whitespace. One dark "torn paper" band opens every page for contrast, then the rest of the page is light.

Use this document as the full spec for rebuilding this look on a new site: palette, type, spacing, every reusable primitive class, every custom component, and the page-composition patterns that combine them.

---

## 1. Design Principles

1. **Light canvas, one dark accent zone per page.** Pages are 95% white/off-white. Each page opens with a single dark, textured "torn paper" hero band, and (on the homepage) one dark services panel mid-page. Dark is used sparingly and deliberately, never as a whole-page theme.
2. **Black is the primary CTA color, not the accent color.** Primary buttons are solid `#111111`/`#000000`, not indigo. The indigo accent (`#6366f1`) is reserved for small emphasis: badges, eyebrows, icons, gradient text, focus rings, active nav states.
3. **Thin borders + soft shadows over heavy chrome.** Cards use 1px hairline borders (`#e5e7eb` / `#eaeaea`) and a very soft, large-radius shadow (`0 10px 40px rgba(0,0,0,0.05)`) instead of hard drop shadows.
4. **Pill-shaped interactive elements.** Buttons, badges, and the navbar itself use fully-rounded (`border-radius: 999px`) or near-pill shapes. Cards use large but not full radii (16–24px).
5. **Generous whitespace on an 8pt scale.** Section padding is `clamp()`-based and large (`clamp(4rem, 9vw, 7.5rem)` per section). Never cram content edge-to-edge.
6. **Motion is subtle, physical, and respects reduced-motion.** Scroll-reveal fade+rise, gentle floating, slow auto-rotation, hover lift of 2–4px. Every animation has a `prefers-reduced-motion: reduce` fallback that disables it outright.
7. **One consistent navbar look regardless of what's behind it.** The floating pill navbar is glassy/frosted at all times; it hard-cuts (no transition) between a light-glass tint and a dark-glass tint depending on whether it's currently overlapping a dark section.
8. **Typography does the heavy lifting.** One typeface (Inter), heavy weights (800) for headings with tight negative letter-spacing, muted gray for body copy. No decorative fonts.

---

## 2. Color Palette

### Core palette (CSS custom properties)

| Token | Value | Usage |
|---|---|---|
| `--os-bg` | `#fafafa` | Page background (light) |
| `--os-card-bg` | `#ffffff` | Card/surface background |
| `--os-text` | `#111111` | Primary text / headings |
| `--os-text-muted` | `#666666` | Body copy, descriptions |
| `--os-border` | `#e5e7eb` | Default hairline border |
| `--os-border-soft` | `#eaeaea` | Softer hairline border (cards) |
| `--os-accent` | `#6366f1` | Indigo accent (badges, links, focus, icons) |
| `--os-accent-dark` | `#4f46e5` | Darker indigo (hover/deep accents) |
| `--os-dark-bg` | `#0b0b0b` | Dark section / footer background |
| `--os-dark-card-bg` | `#151515` | Cards inside dark sections |
| `--os-dark-border` | `rgba(255,255,255,0.1)` | Borders inside dark sections |
| `--os-dark-text` | `#f5f5f5` | Text inside dark sections |
| `--os-dark-text-muted` | `#9ca3af` | Muted text inside dark sections |
| `--os-gradient` | `linear-gradient(120deg, #6366f1 0%, #818cf8 50%, #4f46e5 100%)` | Gradient text accent |

**Dark-band variant of the gradient** (used on the torn-paper header, which is already dark): `linear-gradient(120deg, #a5b4fc 0%, #818cf8 55%, #c7d2fe 100%)` — lighter stops so it still pops against `#0b0b0b`.

### Semantic pairings
- Body text on light background: `#111111` headings / `#666666` paragraphs.
- Body text on dark background: `#f5f5f5` headings / `#9ca3af` paragraphs.
- Links / active nav / icons-of-emphasis: `#6366f1` (light bg) or `#a5a8ff` (dark bg).
- Primary button: background `#111111` → hover `#000000`, text always white.
- Ghost/secondary button: white background, `1px solid var(--os-border)`, text `--os-text`.
- Selection highlight (`::selection`): indigo background, white text.

### Framework mapping (if using Infima/Docusaurus-style tokens)
```
--ifm-color-primary: #6366f1
--ifm-color-primary-dark: #4f52ec
--ifm-color-primary-darker: #4245ea
--ifm-color-primary-darkest: #2e2ec4
--ifm-color-primary-light: #7c7ff2
--ifm-color-primary-lighter: #898cf3
--ifm-color-primary-lightest: #b1b3f7
```

Color mode: **light mode only** — the site does not ship a dark-mode toggle; the "dark" look only ever appears in specific full-bleed bands (hero, one mid-page services panel, footer), never as a switchable site theme.

---

## 3. Typography

- **Typeface:** [Inter](https://fonts.google.com/specimen/Inter), loaded via Google Fonts with weights `400 500 600 700 800 900`.
- **Font stack:** `'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif`
- **Headings:** weight `800`, `letter-spacing: -0.02em`, `line-height: 1.08`. Class: `.os-heading`.
- **Hero title:** `clamp(2.5rem, 5vw, 4.25rem)`, weight `600` in the hero context (lighter than section headings), `letter-spacing: -0.025em`.
- **Section H2 scale:** `clamp(1.9rem, 3.4vw, 2.6rem)`.
- **Page intro H1 scale:** `clamp(2.2rem, 4.5vw, 3.2rem)`.
- **Lead paragraph (`.os-lead`):** `font-size: 1.15rem`, `line-height: 1.7`, muted color, `max-width: 640px` (keeps line length readable).
- **Body copy:** muted gray (`--os-text-muted`), `line-height` 1.6–1.75 depending on context.
- **Eyebrow / kicker label (`.os-eyebrow`):** uppercase, `letter-spacing: 0.14em`, `font-size: 0.78rem`, weight `700`, colored in the accent.
- **Numbered service labels:** weight `800`, `font-size: 0.95rem`, accent color.
- **Code font:** default monospace via `--ifm-code-font-size: 92%`.

### Gradient text
```css
.os-gradient-text {
  background: linear-gradient(120deg, #6366f1 0%, #818cf8 50%, #4f46e5 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```
Used inline inside headings to highlight 1–3 key words per H1 (e.g. "One platform for your entire school's **records**").

---

## 4. Spacing, Radius & Shadow Scale

### Spacing (8pt scale, as CSS variables)
```
--os-s-1: 8px
--os-s-2: 16px
--os-s-3: 24px
--os-s-4: 32px
--os-s-6: 48px
--os-s-8: 64px
--os-s-15: 120px
--os-s-20: 160px
```

### Border radius
```
--os-radius-btn: 999px      /* buttons, badges, pills */
--os-radius-sm: 12px        /* inputs, small icon chips */
--os-radius-lg: 20px        /* cards, glass panels */
--os-radius-img: 24px       /* hero/illustration images */
--os-radius-navbar: 26px    /* floating navbar */
```

### Shadows
```
--os-shadow-card: 0 10px 40px rgba(0, 0, 0, 0.05)
--os-shadow-btn-hover: 0 12px 28px rgba(0, 0, 0, 0.16)
```

### Section rhythm
- Standard section: `padding: clamp(4rem, 9vw, 7.5rem) 0;` (`.os-section`)
- Tight section: `padding: clamp(2.5rem, 5vw, 4rem) 0;` (`.os-section--tight`)
- Max content width: `1180px` container (`.os-container`, `padding: 0 1.5rem`), `1160px` for the navbar itself.

---

## 5. Layout Primitives (reusable CSS classes)

These are the "building block" classes every page composes from — keep this vocabulary in the new site's global stylesheet.

### `.os-container`
Centered max-width wrapper: `max-width: 1180px; margin: 0 auto; padding: 0 1.5rem;`

### `.os-section` / `.os-section--tight`
Vertical rhythm wrapper described above. `position: relative` so decorative pseudo-elements can be layered.

### `.os-section--dark`
Flips all surface tokens to the dark set for one nested block (used for the mid-page "services" panel on the homepage). Rounds all four corners (`border-radius: 32px`) since — unlike the hero — it's not full-bleed against the viewport edge on inner pages.

### `.os-grid`, `.os-grid--2/3/4`
CSS grid with `gap: var(--os-s-3)`, and responsive column collapse:
- 3 & 4-column grids → 2 columns at ≤996px, 1 column at ≤640px.
- 2-column grids → 1 column at ≤640px.

### `.os-glass` / `.os-glass-strong`
Card surface: white background, 1px soft border, `--os-radius-lg`. The "strong" variant adds a faint indigo-tinted gradient background (`linear-gradient(135deg, #f4f4ff 0%, #ffffff 60%)`) for emphasis banners (e.g. CTA banners). Inside `.os-section--dark`, `.os-glass-strong` swaps to a dark indigo-tinted gradient.

### `.os-card`
Padding (`--os-s-4`) + hover lift: `translateY(-4px)` and border color shifts to the accent, on a 500ms `cubic-bezier(0.22, 1, 0.36, 1)` ease. Combine with `.os-glass` for the standard "feature card" look used throughout Features/About/Modules pages.

### `.os-badge`
Inline pill: white bg, 1px border, muted text, small indigo dot (`::before`, 6px circle) before the label. Used for small status labels like "Legal".

### `.os-eyebrow`
Small uppercase accent kicker sitting above every section heading.

### `.os-heading` / `.os-lead`
Typographic primitives described in §3.

### Buttons — `.os-btn`, `.os-btn--primary`, `.os-btn--ghost`
```css
.os-btn {
  padding: 0.95rem 1.9rem;
  border-radius: 999px; /* pill */
  font-weight: 600;
  transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s, background .25s, border-color .25s;
}
.os-btn:hover { transform: translateY(-2px); }

.os-btn--primary { background:#111; color:#fff; box-shadow: 0 6px 20px rgba(17,17,17,.18); }
.os-btn--primary:hover { background:#000; box-shadow: var(--os-shadow-btn-hover); }

.os-btn--ghost { background:#fff; border: 1px solid var(--os-border); color: var(--os-text); }
.os-btn--ghost:hover { border-color:#c7cad4; box-shadow: 0 8px 22px rgba(0,0,0,.06); }
```
On dark backgrounds, ghost buttons become transparent with a translucent white border, and primary buttons invert (white background, black text).

### Ambient background texture (`OsOrbs` component → `.os-bg-texture`)
Fixed, full-viewport, `z-index: -1`, non-interactive layer mounted once per page containing:
- `.os-bg-grid`: a faint 56×56px crosshatch grid (`rgba(17,17,17,.045)` lines), masked with a radial gradient so it fades out toward the bottom of the viewport.
- Two `.os-bg-glow` blurred indigo circles (`filter: blur(90px)`, ~40–46vw diameter) positioned top-right and mid-left, at low opacity (`rgba(99,102,241,0.10–0.16)`), for ambient depth without a hard hero image.

### Scroll-reveal (`Reveal` component → `.os-reveal`)
Wrap any block in `<Reveal>`; it uses an `IntersectionObserver` (threshold 0.15) to add `.os-reveal--visible` once, animating `opacity 0→1` and `translateY(24px)→0` over 700ms (`cubic-bezier(0.22,1,0.36,1)`). Disconnects after first trigger (fires once, not on every scroll). Fully disabled under `prefers-reduced-motion: reduce`.

### Gentle float (`.os-float`)
`translateY` oscillation ±14px over a 6s ease-in-out infinite loop — used on hero illustration/3D elements to feel "alive" without being distracting.

---

## 6. Signature Components

### 6.1 Floating glass navbar
A pill-shaped, sticky navbar that never touches the viewport edge:
- `position: sticky; top: 16px;` `width: calc(100% - 32px); max-width: 1160px; margin: 16px auto 0;`
- `border-radius: 26px`, frosted glass via layered gradients + `backdrop-filter: blur(20px) saturate(200%)`.
- Where supported (Chromium), an SVG displacement filter (`url(#os-liquid-glass)`, defined once in the root layout) bends the backdrop for a true "liquid glass" refraction rather than a flat blur/tint.
- A 1px gradient border ring (masked with `mask-composite: exclude` so only the edge shows) plus a soft top highlight line, to sell a glass edge catching light.
- **Adaptive re-tint:** a body class (`os-navbar-dark`, toggled by a small client module that watches scroll position against dark-section boundaries) swaps the navbar's tint from light-glass to dark-glass **instantly, no transition** — a hard cut, because it's crossing a hard section boundary (the dark hero / dark footer), not a gradual background.
- Desktop layout: 3-column grid (`brand | nav-links | right-controls`) with `1fr auto 1fr` so the center nav links are truly centered regardless of brand/CTA width — not just centered in leftover space.
- Nav link style: `font-weight: 500; font-size: 0.92rem;` muted color, pill hover background, active state gets a bold weight + small accent underline bar.
- A vertical hairline divider sits between the last nav link and the CTA button.
- CTA button in the navbar is small, solid black pill (`navbar-cta-button`), inverts to white-on-black's opposite (white bg/black text) when the navbar is in its dark-tint state.
- Brand mark: 30×30px logo image + two-tone wordmark text (`"Open"` in primary text color, `"School"` in accent/indigo) — implemented as live text spans (not a flattened image) so each half can recolor independently when the navbar crosses light/dark zones. Logo icon gets a small rotate+scale on hover.
- Mobile: hamburger opens a right-side drawer (`min(320px, 86vw)`, white background, heavy shadow) with its own active-state left accent bar and a divider separating page links from the GitHub link + CTA.

### 6.2 Torn-paper dark header band (`TornHeader` component)
Every page opens with this. It's the site's one strong signature visual motif:
- Full-bleed dark band (`--os-dark-bg`) directly under the navbar, `margin-top: calc(-1 * (navbar offset))` so it sits flush behind the floating navbar.
- Background: a repeating doodle/pattern SVG tile (`doodle-combined.svg`, 300×300px, repeat) at low opacity, giving subtle hand-drawn texture across the dark band.
- Bottom edge: a torn-paper silhouette SVG (`torn-edge-combined.svg`, repeated horizontally) creates an irregular "ripped paper" cut where the dark band meets the light page below, instead of a hard rectangular edge.
- All child content automatically inherits light-on-dark tokens (text, borders, card backgrounds all swap to their dark variants) — same trick as `.os-section--dark`.
- Inside this band: eyebrow → gradient-highlighted H1 → lead paragraph → button row (primary becomes white-on-black here, ghost becomes transparent/white-bordered) → optionally a stat bar or hero illustration.
- On mobile the pattern tile size and torn-edge height shrink (220px tile / 46px edge vs 300px / 78px) to stay proportional.

### 6.3 Hero cube (3D interactive centerpiece, homepage only)
A CSS 3D-transformed cube built from 6 independent glass panels:
- Each face uses one consistent frosted-glass material (`backdrop-filter: blur(12px) saturate(180%)`, translucent indigo-white tint, soft inner+outer shadow) — deliberately *not* six different colors, to read as "one coherent object," not a Rubik's-cube pattern.
- **Entrance:** each face flies in from a different direction (top/bottom/left/right/front/back) with staggered delays (0–0.6s) and settles into position — reads as "scattered records assembling into one platform."
- **Idle behavior:** after the ~1.7s entrance, it auto-rotates continuously (one full turn / 24s) via `requestAnimationFrame`, combined with the ambient `.os-float` bob.
- **Interaction:** pointer-drag manually rotates it (X tilt clamped to ±70°, Y unlimited), pausing auto-spin while dragging; releases back into idle auto-spin. `touch-action: none` so it works on mobile.
- Each face carries one Lucide icon representing a stakeholder or platform trait (teachers, students, parents, security, attendance, streams) — a `title` attribute gives an accessible label per face.
- Fully static (final resting orientation, no animation) under `prefers-reduced-motion: reduce`.

### 6.4 Marquee logo strip (`TechLogos`)
A horizontally auto-scrolling row of partner/tech logos (TypeScript, Go, Swagger/OpenAPI, JSON, Webhooks, Asgardeo, etc.), rendered inside pill-shaped chips. The logo list is tripled in the DOM (`[...LOGOS, ...LOGOS, ...LOGOS]`) so a CSS marquee animation can loop seamlessly at any viewport width without a visible seam.

### 6.5 Numbered dark service cards
Inside the one mid-page `.os-section--dark` panel: a 3-column grid of cards, each prefixed with a bold 2-digit index (`01`, `02`...) in accent color, a 40×40px rounded icon chip (indigo-tinted background, light icon), a title, and a short description. On hover the icon chip scales up slightly and rotates -4°, and the card lifts with a border-color shift to accent.

### 6.6 Stat bar
A centered, pill-free glass bar (`.os-glass` + custom padding) holding 2 (or more) big numeric stats side-by-side, separated by thin vertical hairline dividers, each with a large bold number and a small muted label beneath.

### 6.7 CTA banner
A full-width `.os-glass-strong` panel combining a two-line headline+subtext on the left and a single primary pill button on the right (wraps to stacked/centered on mobile). Used at the bottom of every inner page as the page's closing conversion moment.

### 6.8 Footer
Dark, full-bleed, capped with its own torn-paper strip (mirrors the hero's torn edge but inverted — a light strip "tearing" over the dark footer, using a dedicated combined SVG asset):
- Two-column top area: brand block (logo + two-tone wordmark + one-line tagline + contact email) at `1.4fr`, link columns grid at `1fr`.
- Below the torn edge, a slim bottom bar (light background) with copyright text (left) and GitHub + Privacy Policy links (right), plus the same doodle pattern (inverted via `filter: invert(1)`) bleeding faintly through.
- Collapses to a single stacked column under 768px.

### 6.9 Forms (contact page pattern)
- Two-column layout: form panel (`1.6fr`, glass card, generous 2.25rem padding) + side panel (`1fr`) of small contact-channel cards, collapsing to one column ≤900px.
- Inputs/textareas: `#fafafa` background, 1px border, `12px` radius, `0.85rem 1rem` padding; on focus, border turns accent-color and gets a soft `3px` indigo glow ring (`box-shadow: 0 0 0 3px rgba(99,102,241,.15)`) and background lightens to pure white.
- Channel cards: 40×40px rounded icon chip (light indigo bg, indigo icon) + bold title + muted value, optionally a `mailto:` link.
- No backend: submissions are handled client-side by building a `mailto:` link with a URL-encoded subject/body — no form POST endpoint. (Fine for a low-volume marketing/contact page; swap for a real endpoint if volume grows.)

---

## 7. Page Composition Patterns

Every marketing page follows the same skeleton:

1. **`<OsOrbs />`** — ambient grid + glow background, mounted once per page.
2. **`<TornHeader>`** — dark intro band: eyebrow (optional) → H1 with 1 gradient-highlighted phrase → lead paragraph → CTA button row (primary + ghost) → optional stat bar / hero art / role-badge row.
3. One or more **`.os-section`** blocks, each typically:
   - `os-eyebrow` + `os-heading` (+ optional descriptive paragraph) as the section intro.
   - An `.os-grid--2/3/4` of `.os-glass.os-card` items, OR a two-column `[image | copy]` split, OR the one full-bleed `.os-section--dark` services panel.
4. A closing **CTA banner** (`.os-glass-strong`) linking to the next logical page in the funnel (Home→Contact, Features→Modules, Modules→Features, About→Contact).
5. **Footer.**

Wrap scroll-triggered sections in `<Reveal>` for the fade+rise-in effect; stagger with the `delay` prop when several reveal in sequence.

### Homepage-specific flow
Hero (torn band + stat bar) → CTA banner → dark numbered-services panel → tech logo marquee → about teaser (image + copy split).

### Inner page flow (About / Features / Modules / Contact / Privacy)
Torn-band intro (page H1 + lead, centered, `max-width: 720px`) → 1–3 content sections built from card grids → closing CTA banner (omitted on Contact/Privacy).

### Modules page (layered architecture view)
A vertical stack of 4 "layer" panels (Foundation → Academic Structure → People & Classes → Daily Operations), each an `.os-glass` panel containing an eyebrow/title/description header plus an internal grid of module cards, connected top-to-bottom by a small vertical connector line between panels — communicates that modules build on each other rather than sitting as flat, unrelated tiles.

### Coming-soon / waitlist page
Torn-band only: H1 + lead + small role-badge row (icon + label pills for each audience) + a single-input email capture form (also `mailto:`-based) + illustration.

### Legal (Privacy) page
Torn band shows an `.os-badge` ("Legal") above the H1, plus a small "Effective {date}" line instead of a lead paragraph. Body uses an anchored table of contents (11 numbered sections) rendered as plain prose sections below.

---

## 8. Iconography

- **Icon set:** [Lucide](https://lucide.dev) exclusively (`lucide-react`), stroke-based, no filled icons.
- **Standard stroke width:** `1.75` for card/section icons, `2.25`–`2.5` for small inline icons (checkmarks, arrows, badge icons) to stay visible at small sizes.
- **Standard sizes:** 15–17px inline, 19–22px in icon chips, 32px inside the hero cube faces.
- Icons are looked up dynamically by name string through a small `DynamicIcon` registry component — keeps content data (features/modules) as plain data (icon name strings) decoupled from the icon library import, which also matters here since the feature/module list is generated from markdown source files (`src/data/features/*.md` → generated TS).
- Icon chips: rounded-square (10–12px radius) or circular containers, tinted background (`rgba(99,102,241,0.15)` on dark, `#eef0ff` on light) with the icon rendered in accent color (`#a5a8ff` on dark, `#4f46e5` on light).

---

## 9. Motion & Interaction Rules

| Interaction | Effect |
|---|---|
| Card hover | `translateY(-4px)` + border → accent color, 500ms `cubic-bezier(0.22,1,0.36,1)` |
| Button hover | `translateY(-2px)` + shadow deepens, 250ms |
| Icon-chip hover (inside dark service cards) | `scale(1.08) rotate(-4deg)` |
| Link hover (text links) | color shift to accent, no underline unless explicitly a footer/legal link |
| Section entrance | fade + rise 24px→0, 700ms, triggered once via IntersectionObserver at 15% visibility |
| Ambient float | ±14px vertical bob, 6s ease-in-out infinite |
| Hero cube idle | continuous auto-rotate, 360°/24s, pauses on drag |
| Navbar dark/light re-tint | **instant, no transition** — a deliberate hard cut when crossing a section boundary |
| Reduced motion | All of the above disabled/frozen to final state via `@media (prefers-reduced-motion: reduce)` |

---

## 10. Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `≥997px` | Full desktop navbar (3-column centered grid layout) |
| `≤996px` | Navbar collapses to hamburger drawer; hero/about grids stack to 1 column (image/art reorders above copy via `order: -1`); 3–4 col grids → 2 columns |
| `≤900px` | Contact page grid stacks to 1 column |
| `≤768px` | Footer top area stacks to 1 column |
| `≤640px` | All grids collapse to 1 column; stat bar wraps with `flex: 1 1 40%` tiles; torn-band pattern tile and edge height shrink proportionally (300px→220px tile, 78px→46px edge) |

---

## 11. Content & Voice Guidelines

- Headlines are short, concrete, and benefit-led ("One platform for your entire school's records"), with exactly one key phrase gradient-highlighted.
- Lead paragraphs explain the *replacement* story: what old, painful process this removes (paper registers, disconnected spreadsheets), then what the platform gives instead.
- Feature copy favors concrete nouns over adjectives — list actual capabilities ("Create academic years", "Set the current academic year") rather than vague claims.
- Numbers used as social proof/structure markers (e.g., "12 Core Modules", "Twelve modules. One school system.") reinforce that the product is a bounded, well-organized system, not an open-ended tool.
- Sri Lankan education-system specifics (Grade 1–13, Scholarship years, O/Level, A/Level streams) are used as concrete, localized detail rather than generic "K-12" language — ground copy in the real domain the product serves.
- CTA button labels are always an action verb + object ("Get Started", "Explore Features", "Contact the Team", "View Modules") — never generic "Learn More" as a primary CTA (that phrasing is reserved for secondary text links).

---

## 12. Assets Checklist for a New Site

To reproduce this system on a new project, you need:
- [ ] Inter font (Google Fonts or self-hosted, weights 400–900)
- [ ] Lucide icon library
- [ ] A repeating doodle/pattern SVG tile for dark-band texture
- [ ] A torn-paper-edge SVG (repeat-x) for the hero/footer transition, ideally with the doodle baked into the cut so no double-layering is needed
- [ ] Two logo variants: black mark (light backgrounds / mobile sidebar) and white mark (dark backgrounds / footer)
- [ ] An SVG displacement filter definition (for the optional true liquid-glass navbar refraction in Chromium; safe to omit and fall back to a plain frosted blur)
- [ ] Brand wordmark split as two independently-colorable text spans, not a flattened logo image
- [ ] A handful of line-art/abstract illustrations (SVG) for image-teaser sections, styled to match the indigo/white palette

---

*This document describes the design system as implemented in the OpenSchool marketing site (Docusaurus + React + CSS Modules). The patterns are framework-agnostic — the same tokens, primitives, and component behaviors can be reproduced in any stack (Next.js, plain HTML/CSS, Vue, etc.).*
