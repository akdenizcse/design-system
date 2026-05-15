# Changelog

All notable changes to `@akdeniz-uni/design-system` are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Versioning policy

- **MAJOR** — breaking visual or API changes (renamed tokens, removed components, restructured exports).
- **MINOR** — new components, new tokens, new variants, additive changes that don't break consumers.
- **PATCH** — bug fixes, copy tweaks, asset replacements that don't change the API surface.

Pre-release tags use `0.x.y-rc.N` and publish to the `next` dist-tag.

---

## [Unreleased]

### Added
- Placeholder for the next release.

---

## [0.1.0] — 2026-05-08

Initial public release.

### Added
- **Tokens** — `colors_and_type.css` exposing the full color palette (brand, blue/orange ramps, neutrals, semantic), typography scale, spacing, radii, shadows, motion easing/durations.
- **Fonts** — Gotham Narrow + Gotham X Narrow OTF families under `fonts/` (license required for redistribution; see README).
- **Brand assets** — `assets/logo.png` (official seal) and `assets/logo.pdf` (vector source).
- **Components** — `Button`, `Field`, `Input`, `Select`, `Textarea`, `Badge`, `Card`, `Alert`, `Tabs` (ESM, peer-depends on React 18).
- **Type definitions** — full `.d.ts` for the public API.
- **Brand metadata** — `brand` constant with frozen color and font-family values for use in canvas / theming code.
- **UI kit reference** — portal kit (`ui_kits/portal/`) demonstrating the components in context (not packaged; for documentation only).
