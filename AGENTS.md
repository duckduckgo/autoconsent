# Autoconsent Agent Guide

A library for automatically handling cookie consent popups on websites. Used in DuckDuckGo browser apps. Rules detect Consent Management Providers (CMPs) and automate opt-out/opt-in flows.

## Project Layout

```
lib/              TypeScript source for the autoconsent engine
lib/cmps/         Code-based CMP rule classes (sourcepoint, onetrust, etc.)
lib/rules.ts      Type definitions for AutoConsentCMPRule and rule steps
lib/eval-snippets.ts  Eval snippets for main-world JS execution
rules/autoconsent/    Hand-maintained JSON rules
rules/generated/      Auto-generated JSON rules (auto_XX_domain_hash.json)
rules/build.ts        Merges all rules into rules.json, consentomatic.json, compact-rules.json
tests/                Playwright E2E test specs (one per CMP)
tests-wtr/            Web Test Runner unit tests for DOM actions and rule logic
playwright/runner.ts  Test harness: generateCMPTests(name, urls, options)
addon/                Browser extension (MV3 + Firefox)
scripts/              Build and validation scripts
docs/                 Reference documentation (rule syntax, internal API)
```

## Quick Start

```bash
npm ci
npm run prepublish    # full build: compile filterlist, build rules, bundle
npm run watch         # auto-rebuild on changes to lib/, addon/, rules/
```

| Command | Purpose |
|---------|---------|
| `npm run watch` | Auto-rebuild on changes to `lib/`, `addon/`, `rules/` (runs `prepublish` on each change) |
| `npm run lint` | ESLint + Prettier + JSON rule schema validation |
| `npm run lint-fix` | Auto-fix lint and formatting issues |
| `npm run rule-syntax-check` | Validate `rules/autoconsent/*.json` against the TypeScript schema |
| `npm run test:lib` | Unit tests (Web Test Runner) |
| `npm run test` | All Playwright E2E tests |
| `npm run test:webkit` | Playwright tests in WebKit only |
| `npm run test:chrome` | Playwright tests in Chrome only |
| `npm run build-rules` | Rebuild `rules.json`, `consentomatic.json`, `compact-rules.json` |
| `npm run create-rule` | Scaffold a new JSON rule + test spec |

## Code Style

- **Preserve existing comments.** Do not remove JSDoc comments, TODO comments, or inline explanations unless the related code is also being removed. Rewriting a comment to reflect updated logic is fine.

## Working with Cookie Popups

When investigating or fixing a cookie popup, start by **opening the site in a browser** with the autoconsent extension (`dist/addon-mv3/`) loaded. Check the devtools console for autoconsent logs:

- **"Found CMP: [name]" + opt-out failed** → an existing rule is broken. Follow the `fix-cmp-rule` skill (`.claude/skills/fix-cmp-rule.md`).
- **No CMP detected** → no rule handles this popup. Follow the `create-cmp-rule` skill (`.claude/skills/create-cmp-rule.md`).
- **"Found CMP: [name]" + success** → the rule works. Nothing to do.

Use the `publicwww-search` skill (`.claude/skills/publicwww-search.md`) to check if a popup comes from a third-party CMP provider.

## Working with Rules

### JSON Rules

JSON rules live in `rules/autoconsent/` (hand-maintained) and `rules/generated/` (auto-generated). Each file defines one CMP rule following the `AutoConsentCMPRule` type in `lib/rules.ts`.

```json
{
  "name": "example-cmp",
  "prehideSelectors": ["#cookie-banner"],
  "detectCmp": [{ "exists": "#cookie-banner" }],
  "detectPopup": [{ "visible": "#cookie-banner" }],
  "optIn": [{ "waitForThenClick": "#accept-all" }],
  "optOut": [{ "waitForThenClick": "#reject-all" }],
  "test": [{ "cookieContains": "consent=rejected" }]
}
```

For the complete rule syntax reference (all step types, element selectors, conditionals, etc.), see [docs/rule-syntax.md](docs/rule-syntax.md).

### prehideSelectors

`prehideSelectors` inject CSS early (before the CMP is even detected) to prevent the cookie popup from flickering on screen. They use `opacity: 0` (not `display: none`) so the popup still occupies layout space and detection via `visible` checks still works. If opt-out doesn't start within 2 seconds, the elements are automatically unhidden to avoid permanently hiding page content.

Keep prehideSelectors **narrow** — they are applied across all matching rules simultaneously, so an overly broad selector (e.g. `body`) could hide the entire page during the 2-second window.

### minimumRuleStepVersion

New step types are added to the autoconsent engine over time. `minimumRuleStepVersion` declares which version of the step format a rule requires. Clients that don't support the required version silently skip the rule, preventing failures on older app versions.

- `1` (default) — all original step types (`exists`, `visible`, `waitFor`, `click`, `waitForThenClick`, `wait`, `hide`, `if`/`then`/`else`, `any`, `eval`, `cookieContains`, etc.)
- `2` — added `removeClass`, `setStyle`, `addStyle`

Omit the field (or set to `1`) if the rule only uses original step types. Set to `2` if the rule uses `removeClass`, `setStyle`, or `addStyle`.

### Code-Based Rules

For CMPs requiring complex non-linear logic, CMP API interaction, or `Promise.race()` for competing UI states, use a TypeScript class extending `AutoConsentCMPBase` in `lib/cmps/`. Examples: `sourcepoint-frame.ts`, `onetrust.ts`, `cookiebot.ts`, `consentmanager.ts`. Most rules should be JSON — code-based rules are rarely needed.

### Selector Strategy

Prefer selectors that won't change between builds or locales. In priority order: stable data attributes (`[data-testid="..."]`) > stable IDs (`#cookie-banner`) > class substrings (`[class*="cookie-banner"]`) > structural CSS > XPath text matching (last resort, language-specific). Avoid CSS module hashes (`.sd-cmp-3cRQ2`), framework-generated IDs (`#react-aria*`, `#radix-\:*\:`), body class lists, and deep `nth-child` chains. See the `create-cmp-rule` skill for detailed examples and anti-patterns.

### Cosmetic Rules

Cosmetic rules hide the popup via CSS instead of clicking reject. Use when a popup has no reject/decline button (only accept/close). Set `"cosmetic": true` and use `hide` steps in `optOut`. Hiding can break scroll or overlay behavior — see the `create-cmp-rule` skill for breakage fix patterns.

## Regional Differences

CMPs behave differently by region:

- **EU/EEA (GDPR):** Full consent dialog with explicit reject/accept options.
- **US (CCPA/state laws):** Often a simpler notice with "Close" or "Do Not Sell". Some CMPs show nothing.
- **Other regions:** Varies.

Use `if`/`then`/`else` to handle regional variants within a single rule.

### Testing Across Regions

- **`REGION` env var** — filters which test URLs to run (from `data/coverage.json`). Does not change where requests come from.
- **`PROXY_SERVER` env var** — routes traffic through a geographic proxy.

```bash
REGION=DE npx playwright test tests/sirdata.spec.ts --project webkit
REGION=DE PROXY_SERVER=socks5://proxy.example:1080 npx playwright test tests/sirdata.spec.ts --project webkit
```

Test specs support `skipRegions` and `onlyRegions`:

```typescript
generateCMPTests('Sirdata', ['https://gizmodo.com/'], {
    skipRegions: ['US'],
    onlyRegions: [],
});
```

## PR Review Checklist

### CI Pipeline

Two CI systems run on PRs:

1. **GitHub Actions** (`.github/workflows/checks.yml`): runs `npm run lint` and `npm run test:lib` on every push/PR. These must pass.
2. **Jenkins**: runs Playwright E2E tests in 9 regions (US, GB, AU, CA, DE, FR, NL, CH, NO). Only tests for modified rule files and their corresponding test specs are run. Jenkins posts a PR comment with an artifact ZIP link and a link to the [review tool](https://zok.pw/autoconsent-review-tool/) for inspecting screenshots.

### Reviewing New Rule PRs

- [ ] `npm run lint` passes (ESLint + Prettier + schema validation)
- [ ] JSON rule validates against schema (`npm run rule-syntax-check`)
- [ ] A corresponding test spec exists in `tests/`
- [ ] Test URLs are reachable and relevant
- [ ] Selectors are stable (no dynamic IDs, no full body class lists, no CSS module hashes)
- [ ] `optOut` targets an actual reject/decline button, not a privacy policy link
- [ ] For generated rule fixes: all region variants are updated consistently

### Reviewing Code-Based Rule PRs

- [ ] Lint and unit tests pass
- [ ] No hardcoded site-specific attribute values
- [ ] Fallback paths exist for regional variants
- [ ] Uses existing DOM helpers (`this.click()`, `this.waitForElement()`, etc.)

### Handling Flaky E2E Tests

E2E tests hit live sites and are inherently flaky due to site changes, regional differences, and network conditions. Before concluding a test is broken:

- Check Jenkins screenshots in the review tool
- If a test fails only in certain regions, consider adding `skipRegions`
- Playwright is configured with retries (2 retries in CI)
- Verify the site still has the same cookie consent popup by visiting it manually

## Verification

| Step | Command |
|------|---------|
| Schema + formatting | `npm run lint` |
| Rule syntax only | `npm run rule-syntax-check` |
| Unit tests | `npm run test:lib` |
| Single CMP E2E test | `npx playwright test tests/<cmp>.spec.ts` |
| Full E2E suite | `npm run test` |
