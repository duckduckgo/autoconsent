# Autoconsent Agent Guide

A library for automatically handling cookie consent popups on websites. Used in DuckDuckGo browser apps. Rules detect Consent Management Providers (CMPs) and automate opt-out/opt-in flows.

## Project Layout

```
lib/              TypeScript source for the autoconsent engine
lib/cmps/         Code-based CMP rule classes (sourcepoint, onetrust, etc.)
lib/rules.ts      Type definitions for AutoConsentCMPRule and rule steps
lib/eval-snippets.ts  Eval snippets for main-world JS execution
rules/autoconsent/    Hand-maintained JSON rules
rules/generated/      Crawler-generated JSON rules (auto_XX_domain_hash.json)
rules/build.ts        Merges all rules into rules.json, consentomatic.json, compact-rules.json
data/                 Coverage data (coverage.json) and site lists
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

**Use the `cmp-rule` skill** for creating or fixing rules — it covers diagnosis,
CMP identification, rule writing, and testing.

### CMP vs Site-Specific Rules

**Always prefer writing a generic CMP rule over a site-specific rule.** A CMP (Consent Management Platform) is a third-party service (e.g. OneTrust, Cookiebot, Didomi) used by many websites — one rule covers thousands of sites. Check DOM class prefixes, script sources, and PublicWWW before assuming a popup is site-specific. Use `data/coverage.json` to find other sites using the same CMP for testing.

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

CSS selectors injected early (before CMP detection) as `opacity: 0` to prevent popup flicker. Auto-unhidden after 2 seconds if opt-out doesn't start. Keep selectors **narrow** — an overly broad selector (e.g. `body`) hides the entire page.

### minimumRuleStepVersion

Set to `2` if the rule uses `removeClass`, `setStyle`, or `addStyle`. Omit (defaults to `1`) otherwise. Clients that don't support the required version silently skip the rule.

### Code-Based Rules

For CMPs requiring complex non-linear logic, CMP API interaction, or `Promise.race()` for competing UI states, use a TypeScript class extending `AutoConsentCMPBase` in `lib/cmps/`. Examples: `sourcepoint-frame.ts`, `onetrust.ts`, `cookiebot.ts`, `consentmanager.ts`. Most rules should be JSON — code-based rules are rarely needed.

### Selector Strategy

Prefer selectors stable across builds and locales: data attributes (`[data-testid="..."]`) > stable IDs > class substrings (`[class*="..."]`) > structural CSS > XPath (last resort). **Do NOT use CSS module hashes** (4+ random chars like `.css-1a2b3c`) or framework-generated IDs. See the `cmp-rule` skill (`.agents/skills/cmp-rule/SKILL.md`) for examples and anti-patterns.

### Cosmetic Rules

Cosmetic rules hide the popup via CSS instead of clicking reject. Use when a popup has no reject/decline button (only accept/close). Set `"cosmetic": true` and use `hide` steps in `optOut`. Hiding can break scroll or overlay behavior — see the `cmp-rule` skill for breakage fix patterns.

## Regional Differences

CMPs behave differently by region:

- **EU/EEA (GDPR):** Full consent dialog with explicit reject/accept options.
- **US (CCPA/state laws):** Often a simpler notice with "Close" or "Do Not Sell". Some CMPs show nothing.
- **Other regions:** Varies.

Use `if`/`then`/`else` to handle regional variants within a single rule.

### Testing Across Regions

**All rule changes should be tested across geographic regions** to catch GDPR/CCPA/regional popup variations. Use the `brightdata-testing` skill (`.cursor/skills/brightdata-testing/SKILL.md`) to test from real geographic locations via remote browsers.

In CI, Jenkins tests each PR across 9 regions using geographic proxies (`REGION` + `PROXY_SERVER` env vars loaded from `.env` files). Test specs support `skipRegions` and `onlyRegions` options.

## Verification

After creating or modifying a rule:

1. `npm run build-rules` — rebuild rules.json (required for tests)
2. `npm run rule-syntax-check` — validate rule JSON against schema
3. `npx playwright test tests/<name>.spec.ts` — run the E2E test
4. `npm run prepublish` — full build including extension bundle
5. Check the rule works in a browser with the extension (`dist/addon-mv3/`) loaded
