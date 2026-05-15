# Publishing & versioning

This package follows **[Semantic Versioning](https://semver.org/)**. The current version is the `version` field in `package.json` and `src/version.js`. Release notes live in `CHANGELOG.md`.

## Quick reference

| Change kind | Bump | Command |
|---|---|---|
| Bug fix, copy tweak, asset swap (no API change) | **patch** | `npm run release:patch` |
| New token, new component, new variant (additive) | **minor** | `npm run release:minor` |
| Renamed/removed tokens, breaking visual change, API rename | **major** | `npm run release:major` |
| Pre-release / release candidate | **prerelease** | `npm run release:prerelease` (publishes under `next` dist-tag) |

Each `release:*` script runs `npm version <bump>` (which tags the git commit) and then `npm publish`.

## Release workflow

1. **Land all changes on `main`.** PRs should update `CHANGELOG.md` under `## [Unreleased]`.
2. **Move `Unreleased` to a dated version heading.** e.g. `## [0.2.0] — 2026-05-15`.
3. **Run the release script** for the appropriate bump:
   ```bash
   npm run release:minor
   ```
   This will:
   - bump `package.json` and create a git tag `v0.2.0`
   - run `npm publish` (you'll need to be logged in)
4. **Push the tag**: `git push --follow-tags`
5. **Sync `src/version.js`** if you didn't wire it to a `version` lifecycle hook (see *Auto-syncing version.js* below).

## Registry options

The default `publishConfig.access` is `restricted` so the package is private by default — flip to `public` for an open-source release.

### Option A — npm public registry
```bash
npm login
npm publish --access public
```
Use the scope `@akdeniz-uni/` (you'll need to own that org on npm).

### Option B — GitHub Packages
Add to `package.json`:
```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com",
  "access": "restricted"
}
```
Authenticate with a `GITHUB_TOKEN` that has `write:packages` scope. CI sample below.

### Option C — Verdaccio / private registry
Configure `.npmrc` with your registry URL; the `publish` command stays the same.

## Auto-syncing `src/version.js`

Add this to `package.json` so `npm version` keeps the runtime constant in sync:

```json
"scripts": {
  "version": "node -e \"require('fs').writeFileSync('src/version.js','export default '+JSON.stringify(require('./package.json').version)+';\\n')\" && git add src/version.js"
}
```

The `version` lifecycle hook runs after `npm version <bump>` writes `package.json` and before it commits, so the regenerated `version.js` is included in the same release commit.

## CI release on tag (GitHub Actions)

```yaml
# .github/workflows/release.yml
name: release
on:
  push:
    tags: ['v*']
jobs:
  publish:
    runs-on: ubuntu-latest
    permissions: { contents: read, packages: write, id-token: write }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', registry-url: 'https://registry.npmjs.org' }
      - run: npm publish --provenance
        env: { NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }} }
```

## What ships in the tarball

The `files` field in `package.json` controls this:

```
src/                    components, version constant, type defs
assets/                 logo.png, logo.pdf
fonts/                  Gotham Narrow + Gotham X Narrow OTFs
colors_and_type.css     tokens
README.md, CHANGELOG.md, SKILL.md, LICENSE
```

Run `npm pack --dry-run` before publishing to inspect the exact file list.

## Consuming the package

```bash
npm install @akdeniz-uni/design-system react react-dom
```

```js
// 1. Tokens (CSS variables on :root)
import '@akdeniz-uni/design-system/tokens.css';

// 2. Components
import { Button, Card, Badge } from '@akdeniz-uni/design-system/components';

// 3. Brand metadata
import { brand } from '@akdeniz-uni/design-system';
console.log(brand.colors.blue800); // '#1D366A'
```

Static assets are addressable as package paths and bundlers (Vite, webpack, Next.js) will resolve them:

```js
import logo from '@akdeniz-uni/design-system/assets/logo.png';
```

## Font licensing — IMPORTANT

The Gotham family is commercial software from Hoefler & Co. Verify your institutional license **before publishing the package publicly**. If the license forbids redistribution, drop the `fonts/` line from the `files` array, document the substitute (Inter Tight) in the README, and have consumers self-host the OTFs.
