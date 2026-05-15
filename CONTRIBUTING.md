# Contributing to `@akdenizcse/design-system`

Thanks for working on the Akdeniz design system. This file is the short version of how we land changes safely. The longer documents (`README.md` for design rules, `PUBLISHING.md` for release mechanics) are linked where relevant.

---

## Before you start

1. **Read `README.md`** — the *Content fundamentals* and *Visual foundations* sections are the constitution. Most rejected PRs run afoul of them (introducing a gradient, a fourth brand color, an emoji-as-icon, etc.).
2. **Have Node 20+** installed. Everything is plain ESM — no build step, no bundler config to learn.
3. **Clone the repo**:
   ```bash
   git clone https://github.com/akdenizcse/design-system.git
   cd design-system
   ```

---

## Branching

We use trunk-based development on `main` with short-lived branches.

| Prefix | Use for |
|---|---|
| `feat/<short-slug>` | New component, new token, new variant — anything additive. |
| `fix/<short-slug>` | Bug fix, copy correction, asset swap. |
| `chore/<short-slug>` | Build, CI, dependencies, docs that don't change consumer behaviour. |
| `breaking/<short-slug>` | Anything that needs a **major** bump. Treat with care. |

Examples: `feat/menu-component`, `fix/button-focus-ring`, `chore/update-actions-versions`.

Branch names map onto the PR title and on to the changelog entry — keep them readable.

---

## Commit messages

Loosely [Conventional Commits](https://www.conventionalcommits.org/). The release workflow uses tag names for versions, not commit messages, so the *only hard rule* is that each commit message be a single descriptive line. Recommended prefixes:

- `feat: add <thing>` — new public API.
- `fix: <what was broken>` — bug fix.
- `chore: …` — refactor, deps, internal cleanup.
- `docs: …` — README / CHANGELOG / inline JSDoc.
- `style: …` — token tweaks, padding nudges, color shade adjustments.
- `breaking: …` — removed/renamed exports, breaking visual changes.

If a single commit touches multiple things, split it. If you can't, use the most consequential prefix.

---

## What goes in a PR

Every PR should include:

1. **A clear title** matching the branch convention (`feat: …`, `fix: …`, etc).
2. **A short description** — what's changing and *why*. Screenshots / before-after for any visual change. Use the project's preview cards in `preview/` to capture the new state.
3. **A `CHANGELOG.md` entry** under `## [Unreleased]` in the appropriate section (`### Added` / `### Changed` / `### Fixed` / `### Removed`).
4. **Token changes documented** in `colors_and_type.css` comments if you add new variables. Don't introduce raw hex/px elsewhere — go through tokens.
5. **A passing CI run.** The workflow checks that `src/version.js` matches `package.json`, exports resolve, and the tarball packs cleanly.

PRs that touch component public API also need:

- A **JSDoc block** on the exported function, with at least one usage example.
- A matching update in `src/index.d.ts`.
- A preview card in `preview/components-<name>.html` so the Design System tab keeps showing every component.
- A re-export in `src/components/index.js`.

---

## Design rules quick reference

These come up in PR review constantly:

- **Colors come from tokens** (`var(--blue-600)`, etc.). New colors need a discussion before they land — file an issue first.
- **No gradients as decoration.** The only gradient in the system is the hero protection gradient. Don't add a fourth.
- **No emoji as icons.** Lucide via the documented CDN; pick a similar weight if the icon you need is missing.
- **Sentence case** for headings, buttons, nav. Reserve Title Case for proper nouns and the very largest hero display type.
- **Spacing is 8pt-grid.** Body rhythm 16/24/32; form rhythm 12; card padding 24 (desktop) / 20 (mobile).
- **Radius scale is 4/8/12/16/full.** No 6px, no 10px, no 20px.
- **Focus visible** uses the `--focus-ring` token. Don't paint your own ring.
- **Voice** stays formal *siz* in Turkish, "you" in English. No exclamation marks in UI copy. No "Let's…" exhortations.

If you genuinely believe one of these needs to change, open an issue with the rationale and a use case — don't smuggle the change through a feature PR.

---

## Adding a new component — the checklist

1. Create `src/components/<Name>.js` (ESM, `React.createElement` — keep it free of JSX so the package works without a build).
2. Add JSDoc with at least one usage example.
3. Add the styles to `ui_kits/portal/portal.css` *and* document the class contract in the JSDoc. (We don't ship CSS-in-JS — components are unstyled by default; consumers pair them with `tokens.css` + the patterns from `portal.css`.)
4. Add types to `src/index.d.ts`.
5. Re-export from `src/components/index.js`.
6. Build a preview card `preview/components-<name>.html` showing all variants.
7. Register the card with the appropriate group (`Components`) — see how the existing cards are wired.
8. Update `CHANGELOG.md` → `Unreleased / Added`.
9. **Decide the bump**: new component = **minor**.

---

## Adding or changing tokens

- New tokens go in `colors_and_type.css` under the appropriate section, with a comment explaining when to use them.
- **Renaming** or **removing** a token is breaking → `breaking/` branch + a **major** bump + a migration note in the CHANGELOG.
- New ramps or semantic colors need a preview card in `preview/colors-*.html`.

---

## Releasing

Releases run through CI. The short version:

```bash
# 1. Land all PRs you want in this release on main.
# 2. Promote [Unreleased] in CHANGELOG.md to a dated version heading.
# 3. Bump:
npm run release:minor    # or :patch, :major, :prerelease
# 4. Push the tag:
git push --follow-tags
```

The `.github/workflows/release.yml` job does the publish. See `PUBLISHING.md` for the full runbook (token setup, failure recovery, prerelease channels).

---

## Reporting bugs / requesting things

Open an issue. Useful issues include:

- What you tried and what happened.
- Repro: a code snippet or screenshot.
- Package version (`npm ls @akdenizcse/design-system`).
- For visual bugs: which browser, which page surface, light or dark inverted card.

For new components or tokens, describe **the design problem** first, not the proposed solution — sometimes there's already a token that solves it.

---

## Code of conduct

Be professional and helpful. Disagreements about design are healthy; how we have them is what matters. The brand voice (calm, civic, generous) applies to PR reviews too.
