---
name: akdeniz-design
description: Use this skill to generate well-branded interfaces and assets for Akdeniz University (Akdeniz Üniversitesi, Antalya), either for production or throwaway prototypes/mocks/demos. Contains essential design guidelines, colors, type, fonts, assets, and a UI kit for the academic portal.
user-invocable: true
---

# Akdeniz University design skill

Read `README.md` first — it covers brand context, content rules, visual foundations and iconography.

Then explore:
- `colors_and_type.css` — drop-in CSS variables for colors, type and semantic styles.
- `fonts/` — Gotham Narrow + Gotham X Narrow OTFs (verify license before publishing).
- `assets/logo.pdf` — official wordmark (PDF). `assets/mark.svg` and `assets/wordmark.svg` are working stand-ins.
- `preview/` — small review cards for each token group; useful as visual reference.
- `ui_kits/portal/` — components and screens for the academic portal.

If the user asks for visual artifacts (slides, mocks, throwaway prototypes, social posts), copy the assets you need into the output and produce static HTML files for them to view. Use `colors_and_type.css` directly.

If you're working on production code, read the rules in the README, copy the tokens into the project's tokens file, and follow the same patterns.

If the user invokes this skill without other guidance, ask them what they want to build, ask focused questions about audience, surface and tone, and act as an expert designer who outputs HTML artifacts or production code as the situation demands.

## Defaults at a glance
- Page background: `#F7F8FC`. Cards on white.
- Primary identity: `#1D366A` (deep blue). Primary action: `#0063AA` (sea blue). Accent: `#F47524` (sun orange) — sparingly.
- Type: Gotham Narrow body, Gotham X Narrow display (≥40px). Fallback: Inter Tight, system-ui.
- Spacing: 8pt scale. Radii: 4 / 8 / 12 / 16 / 999.
- Icons: Lucide, 24px, 1.75px stroke. No emoji as decoration.
- Voice: institutional, warm, formal "siz". Sentence case for almost everything.
