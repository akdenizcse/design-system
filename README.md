# Akdeniz University Design System

A modern design system for Akdeniz University's information systems — websites, student/staff portals, dashboards, and internal tools.

> Akdeniz Üniversitesi is a public research university in Antalya, Türkiye, on the Mediterranean ("Akdeniz") coast. Founded 1982. The brand draws on the sun, sea and the warm Mediterranean climate of southern Anatolia.

## Sources & inputs

This system was assembled from materials provided by the brand team:

| Source | Path | Notes |
|---|---|---|
| Official seal | `assets/logo.png` | Circular seal — orange stylised "A" with stars + rays on deep navy, "AKDENİZ ÜNİVERSİTESİ · 1982 · ANTALYA". Use this in UI. |
| Official wordmark / logotype | `assets/logo.pdf` | Vector PDF, Adobe Illustrator export. Original file titled `Akdeniz_Universitesi`, generated 2017-12-04. Authoritative — use this where high-fidelity reproduction matters. |
| Brand typeface — Gotham Narrow | `fonts/GothamNarrow-*.otf` | 16 weights, all italics. **License is the customer's responsibility** — Gotham Narrow is licensed by Hoefler & Co. Confirm institutional license before publishing assets. |
| Brand typeface — Gotham X Narrow | `fonts/GothamXNarrow-*.otf` | 16 weights — for tight headlines and large-display use. |
| Primary colors | spec from brand team | `#1D366A`, `#0063AA`, `#F47524` — see `colors_and_type.css`. |
| Background | spec from brand team | `#F7F8FC` — system base background. |

> Cards in `preview/` and the portal UI kit use the official PNG seal directly. The vector PDF is preserved alongside it for high-resolution print and merch.

---

## Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file. Brand context, content + visual rules, iconography, manifest. |
| `SKILL.md` | Skill manifest. Use this directory as a Claude Code skill. |
| `colors_and_type.css` | All color and type CSS custom properties — base tokens **and** semantic aliases. Import in any HTML file. |
| `fonts/` | Gotham Narrow + Gotham X Narrow OTF files (32 total). |
| `assets/` | Logo PDF, mark SVG, brand imagery and supporting graphics. |
| `preview/` | Self-contained design-system review cards (colors, type, components, etc). |
| `ui_kits/portal/` | High-fidelity UI kit for the Akdeniz student & staff portal. JSX components + interactive `index.html`. |
| `src/` | npm package source — ESM React components, type definitions, version constant. |
| `package.json` | npm publishable manifest (`@akdeniz-uni/design-system`). |
| `CHANGELOG.md` | Versioned release notes. |
| `PUBLISHING.md` | How to bump versions, publish to npm / GitHub Packages, and release via CI. |

---

## Brand at a glance

- **Identity** — Akdeniz Üniversitesi (Akdeniz University). Often shortened to **AÜ**. Always written with the dotted Ü when referring to the institution in Turkish.
- **Tagline territory** — Akdeniz'in Üniversitesi ("The University of the Mediterranean"). The brand leans into place: warm light, deep sea, citrus and pomegranate, ancient ruins, modern research.
- **Audience** — current students, prospective students, staff, alumni, researchers, the Antalya community, international visitors.
- **Voice** — institutional but warm; serious about scholarship, generous about place and people. Bilingual (TR/EN) where the audience warrants.

---

## Content fundamentals

How copy is written across the system:

**Tone.** Calm, civic, academic. Reads like a public institution that takes itself seriously without being stiff. Writes the way a registrar speaks at a welcome assembly: clear, useful, unhurried. Slight warmth from the Mediterranean setting — never beachy or casual.

**Casing.** Sentence case for all body, navigation, and most headings. Title Case is reserved for proper nouns (faculty names, programs, place names) and for very large display headlines on hero sections. **Never** ALL CAPS for body — only for short labels (badges, section eyebrows) where it acts typographically.

**Voice — I, you, we.**
- Use **"siz"** (formal you) in Turkish; the institutional voice is plural, never the informal "sen".
- In English, use **"you"** for the reader and **"we"** sparingly, for the university speaking as one body ("we offer 24 faculties"). Avoid first-person singular entirely.

**Bilingual handling.** Turkish copy comes first; English follows as a parallel translation, not a paraphrase. Don't mix the two in a single sentence. Where space is tight (badges, nav), pick one language and stick with it for that surface.

**Numbers, dates, units.** Turkish locale: `12.345,67`, `12 Mayıs 2026`. English locale on EN pages. Times in 24-hour: `09:00 – 17:00`.

**Examples — yes:**

> Akademik takvim her yıl Senato tarafından onaylanır. Güz dönemi 16 Eylül 2026'da başlar.
> The academic calendar is approved annually by the Senate. Fall semester begins 16 September 2026.

> Başvurunuzu eksiksiz tamamlamak için kimlik belgenizi ve transkriptinizi yükleyin.
> Upload your ID and transcript to complete your application.

**Examples — no:**

> 🎓 Hey there! Ready to crush your application? Let's go! 🚀
> *(too informal, emoji as decoration, exclamation, "let's" as exhortation — all wrong for this brand.)*

**Emoji — almost never.** Not in marketing, not in UI labels, not in announcements. The one acceptable place is informal student-life social posts authored by student clubs — those have their own voice and aren't governed by this system.

**Buttons.** Verb-led, short, lowercase except first letter. `Başvuruyu gönder` / `Submit application`, never `CLICK HERE` or `→ Submit ←`.

**Empty states & errors.** Plain. Tell the user what happened and what to do next. No jokes, no apologies-as-personality.

> Henüz hiç ders eklemediniz. Sol menüden bir bölüm seçin.
> You haven't added any courses yet. Pick a department from the left.

---

## Visual foundations

The brand's visual personality is **clean institutional + Mediterranean warmth**. Restrained layout system; flat surfaces; type-led; one orange accent that punches through deep navy and sea blue.

### Color

Three primary brand colors, one near-white background, plus a neutral ramp and a small semantic set. See `colors_and_type.css` for tokens.

- **Deep Blue `#1D366A`** — primary identity color. Headers, primary text on light, full-bleed backgrounds for hero/section starters.
- **Sea Blue `#0063AA`** — primary action color. Links, primary buttons, focus rings, key chart series.
- **Sun Orange `#F47524`** — accent. Used sparingly: highlights, current-state indicators, one-of-many emphasis. Never as a large area fill behind body text.
- **Background `#F7F8FC`** — the canvas. Pages sit on this; cards sit on `#FFFFFF` above it.

The system does **not** use gradients as decoration. Do not introduce purple/pink gradients, glassy blurs, or rainbow swatches. Color carries meaning, not mood.

### Type

- **Gotham Narrow** — body, UI, long-form. Book (400) for body, Medium (500) for UI text and emphasis, Bold (700) for buttons and small headers.
- **Gotham X Narrow** — display only. Use at 40px and above. Bold and Black for big numerics, names, large hero phrases.
- Line-height 1.5 for body, 1.15–1.25 for headlines, 1.0 for display numerics.
- Tracking: −0.01em on display sizes (≥40px), 0 on body, +0.04em on small all-caps labels.

If Gotham is unavailable in a delivery context, the fallback stack defined in CSS prefers `"Inter Tight"` then `system-ui`. Document any substitution.

### Spacing

8-point base. Scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`. Most layout gaps land on 16/24/32. Form field vertical rhythm is 12. Card inner padding is 24 on desktop, 20 on mobile.

### Backgrounds & imagery

- The system surface is solid `#F7F8FC`. Pages lay clean horizontal bands of color (`#FFFFFF`, `#F7F8FC`, `#1D366A`) and never use textures, patterns, or noise as decoration.
- Photography is documentary — buildings, students at work, ceremonies, the campus and the Antalya coast. **Warm-leaning** color (golden-hour skin tones, sea blues, warm stone). Never b&w by default; never heavy filters; no grain.
- Full-bleed photography is allowed on hero modules, with a **dark protection gradient** from the bottom edge (`linear-gradient(0deg, rgba(29,54,106,0.85), rgba(29,54,106,0))`) so white display type stays legible.
- No hand-drawn illustration. No isometric 3D. No emoji as decoration.

### Cards & surfaces

- White (`#FFFFFF`) on the page background.
- Border-radius **8px** for compact cards, **12px** for primary content cards, **16px** for hero surfaces. No pill cards.
- Border `1px solid rgba(29, 54, 106, 0.08)` is preferred over shadow for definition.
- Shadow is reserved for elevation, not decoration. The system uses two: `--shadow-1` (resting cards) and `--shadow-2` (popovers, menus, modals). Both are cool-tinted (blue-tinted black, not pure black) so they sit naturally next to navy.
- No inner shadows. No glassmorphism. No coloured borders as a decorative left-stripe accent.

### Borders & dividers

- 1px solid `--border` for structural lines.
- Dotted/dashed reserved for "incomplete / in-progress" affordances (e.g. drop targets), never as a decorative pattern.
- Section dividers are full-width, 1px, on `--border-strong` only when the visual rhythm needs the help — otherwise rely on whitespace.

### Corner radii

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Inputs, badges, tags |
| `--radius-md` | 8px | Buttons, list rows, compact cards |
| `--radius-lg` | 12px | Primary content cards, panels |
| `--radius-xl` | 16px | Hero modules, modal containers |
| `--radius-full` | 999px | Avatars, status dots, pills |

### Animation

The system is mostly static. Where motion appears:

- **Easing** — `cubic-bezier(0.2, 0.0, 0, 1)` (a confident decel) for most UI transitions.
- **Duration** — `120ms` for hover, `200ms` for press/focus, `260ms` for entrance/exit, `400ms` for page-level transitions. Nothing slower without reason.
- **Fade + lift** is the default entrance pattern — opacity 0 → 1 with `translateY(4px)`. No bounce, no spring, no scale-overshoot.
- **No scroll-jacked animations**, no parallax, no auto-playing carousels.

### Hover & press states

- **Hover (links, secondary buttons)** — color shifts from `--blue-600` (`#0063AA`) to `--blue-700` (`#004C84`). 120ms.
- **Hover (primary buttons)** — background darkens 8% via `oklch` lightness reduction.
- **Hover (cards)** — border darkens to `--border-strong`; shadow lifts from `--shadow-1` to `--shadow-2`. No translation.
- **Press** — background goes one further step darker; element scales `0.98` only on tappable mobile primary actions. Desktop press = darken only, no scale.
- **Focus visible** — 2px outer ring in `--blue-600` at 0px offset, with 2px inner halo in `#FFFFFF` so the ring stays visible on any background.

### Transparency & blur

Used sparingly. Two acceptable cases:

1. The hero protection gradient described above.
2. A 60% white scrim (`rgba(255,255,255,0.6)`) plus `backdrop-filter: blur(10px)` on a sticky top header — only when the header sits above content that scrolls under it. Otherwise headers are solid.

No frosted side panels, no tinted glass cards, no foggy hero sections.

### Layout rules (fixed elements)

- Top header is sticky, full-width, 64px on desktop, 56px on mobile.
- Side navigation, where it exists, is 240px on desktop, collapsing to a 56px rail at <1024px and a drawer at <768px.
- Page max-width is **1280px** with 24px gutters; long-form reading max-width is **720px**.
- Footer is solid `--blue-900` (a notch darker than `--blue-800` for separation), full-width, never sticky.

### Visual rhythm — system in use

A typical screen alternates these surface bands top to bottom:

1. **Solid `#FFFFFF`** sticky header.
2. **`#F7F8FC`** page surface with white cards.
3. **`#1D366A` deep band** for a feature/hero module — full bleed, big display type, optional photo with protection gradient.
4. Back to `#F7F8FC` with another band of cards.
5. **`#0F2655` darker band** for the footer.

Two bands of color per page is normal. Three is the maximum. Avoid more than one orange-saturated module per page — orange is a punctuation, not a paragraph.

---

## Iconography

The university's brand materials don't ship a custom icon system. UI surfaces use a single open-source icon family for consistency.

- **Library — [Lucide](https://lucide.dev)** (24×24, 1.75–2px stroke, rounded ends).
- **Why Lucide** — calm, geometric, neutral; reads at the same density as Gotham Narrow; aligns visually with the institutional tone. Heroicons would also fit; Phosphor or Tabler (with their playful-end variants) would not.
- **CDN usage** — `https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js`. The kit pulls icons by name (`<i data-lucide="search"></i>` → `lucide.createIcons()`).
- **Substitution flagged** — this is a design-system choice, not a brand-team mandate. Confirm with the brand team whether they want a bespoke set.
- **Stroke + fill** — stroke icons only in this system. No filled-icon pairs, no duotone, no gradient icons. Active/pressed states change icon color, not its shape.
- **Sizing** — 16px (inline with body), 20px (default UI), 24px (emphasis), 32px (feature). Always pixel-aligned.
- **Emoji** — not used as iconography. Don't substitute emoji for icons.
- **Unicode glyphs** — only `→` `↑` `↓` `×` `·` are acceptable as inline glyphs in copy. `✓` is fine inside a status badge but not floating in text. No box-drawing, no math arrows, no decorative dingbats.
- **Logos** — `assets/logo.png` is the official seal used throughout the system; `assets/logo.pdf` is the authoritative vector source.

---

## Files & next steps

- Browse `preview/` to review the system on the **Design System** tab.
- Open `ui_kits/portal/index.html` to see the components in context.
- Open `colors_and_type.css` to copy tokens into a new project.

