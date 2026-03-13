# AGENTS.md

## Cursor Cloud specific instructions

This is `@duckduckgo/autoconsent`, a TypeScript library + browser extension for automatically navigating and dismissing cookie consent popups. It is a single-package repo (not a monorepo). No backend, database, or Docker is required.

### Quick reference

All standard commands are in `package.json` scripts:

| Task | Command |
|---|---|
| Install deps | `npm ci` |
| Full build | `npm run prepublish` |
| Lint | `npm run lint` |
| Unit tests | `npm run test:lib` |
| E2E tests (all) | `npm run test` |
| E2E tests (Chrome) | `npm run test:chrome` |
| Watch mode | `npm run watch` |

### Non-obvious caveats

- **Build before lint or test**: `npm run prepublish` must be run before `npm run lint` (the rule-syntax-check depends on generated files) and before E2E tests (Playwright needs the built `dist/autoconsent.playwright.js`). `npm ci` triggers `prepublish` automatically on install, so a fresh `npm ci` is sufficient.
- **E2E tests hit live websites**: Playwright tests in `tests/` visit real sites and are inherently flaky. Failures on individual sites are expected; focus on whether the test infrastructure runs (browser launches, pages load). Unit tests (`npm run test:lib`) are deterministic and should always pass.
- **Playwright browsers**: Only Chromium is pre-installed. To run Firefox/WebKit E2E tests, install additional browsers with `npx playwright install --with-deps firefox webkit`.
- **Extension testing**: After building, load the unpacked extension from `dist/addon-mv3/` (Chrome) or `dist/addon-firefox/` (Firefox) via the browser's developer mode extensions page.
