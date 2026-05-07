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

## Working with autoconsent rules

### Rule syntax
For the complete rule syntax reference (all step types, element selectors, conditionals, etc.), see [docs/rule-syntax.md](docs/rule-syntax.md).

### Regional Differences

CMPs behave differently by region:

- **EU/EEA (GDPR):** Full consent dialog with explicit reject/accept options.
- **US (CCPA/state laws):** Often a simpler notice with "Close" or "Do Not Sell". Some CMPs show nothing.
- **Other regions:** Varies.

Use `if`/`then`/`else` to handle regional variants within a single rule.

**All rule changes MUST be tested across geographic regions** to catch regional popup variations. Test from real geographic locations using available regional-testing tooling (e.g. proxy-based remote browsers).

### Generic vs Site-Specific Rules

**Always prefer writing a generic CMP rule over a site-specific rule.** One CMP rule can cover multiple sites. See "Identifying a Consent Management Platform" below for common techniques. If the popup is genuinely custom-built, a site-specific rule is the right call.

### JSON Rules vs Code-based rules

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

Code-based rules live in `lib/cmps/`. Each file defines one CMP rule following the `AutoConsentCMPBase` type in `lib/rules.ts`.

**JSON rules are always preferred over code-based rules.** Code-based rules are rarely needed, and should only be used for complex cases, when JSON format is not expressive enough.

### Selectors

Prefer selectors stable across builds and locales: data attributes (`[data-testid="..."]`) > stable IDs > class substrings (`[class*="..."]`) > structural CSS > XPath (last resort). **Do NOT use CSS module hashes** (4+ random chars like `.css-1a2b3c`) or framework-generated IDs.

Array selectors pierce shadow DOM and same-origin iframes. Each selector in the array
scopes into the previous match's `.shadowRoot` or `.contentDocument`:

```json
["#shadow-host", "button.reject"]
["#cmp-container iframe", ".opt-out-btn"]
```

Single-string selectors cannot pierce — use arrays whenever the target is inside a
shadow root or same-origin iframe.

### General Guidelines and Gotchas
- **Regional testing is mandatory** for any rule change — CMPs behave differently under GDPR (EU), CCPA (US), and other jurisdictions. Run the rule against different regions using available regional-testing tooling before considering the change done.
- When verifying a rule, **look at the screenshots** on top of the API results — sometimes a rule reports success, but the popup is not actually handled - a screenshot will detect this.
- **Paywalls do not need to be handled.** If the website presents the choice to pay or agree to cookies, the correct solution is to disable the feature on that site, so no code changes required in this case.
- If the pop-up has an explicit "reject"-like button, you should first consider why HEURISTIC rule didn't handle it. A fix to the heuristic rule is always preferred to a new rule, as long as it doesn't cause potential false-positives on other sites.
- **selfTests are optional.** It is okay to NOT have a self-test, or have it failing as long as the popup is handled correctly. Confirm this with screenshots.
- If you cover a new CMP or a new flavor of the existing CMP, ALWAYS try to look for more examples of that case, and add to the spec file.
- `detectCmp` and `detectPopup` must be fast. Do NOT use waiting steps — the engine retries automatically.
- **`prehideSelectors` do not affect autoconsent visibility checks.** Prehide selectors are injected early to prevent flicker, and are intentionally implemented using opacity, which hides elements from the user, but not from built-in steps such as `waitForVisible` and `visible`. That said, _prehide selectors should be narrow_: overly broad selectors (e.g. `body`) could hide the entire page.
- Prefer DOM-based steps when possible — `eval` steps are a last resort.
- Set `minimumRuleStepVersion: 2` if using `removeClass`, `setStyle`, or `addStyle`.
- Prefer `cookieContains` in `test` when the CMP stores consent in cookies.
- Use `npm run create-rule` to scaffold a new rule and a spec file.

### Fixing breakage in cosmetic rules
When using `hide`, the CMP may lock scrolling or add overlays. Add fixes AFTER the `hide` step, marked `"optional": true`:

| Problem | Fix |
|---------|-----|
| Scroll lock via CSS class | `{ "removeClass": "no-scroll", "selector": "body", "optional": true }` |
| Scroll lock via inline style | `{ "addStyle": "overflow: auto !important", "selector": "body", "optional": true }` |
| Overlay blocking clicks | `{ "hide": "#overlay", "optional": true }` |
| Body position lock | `{ "setStyle": "", "selector": "body", "optional": true }` |

Using `removeClass`, `setStyle`, or `addStyle` requires `"minimumRuleStepVersion": 2`.

## Identifying a Consent Management Platform
The following techniques can help identify a generic CMP:

1. **DOM inspection:** Check class names on popup elements for vendor prefixes
   (`onetrust-`, `didomi-`, `sp_choice_type_`, `cmp-`, `fc-`, `klaro-`, `pd-`, etc.).
2. **JS source analysis:** Inspect the popup buttons' click handlers or find the cookie
   that stores consent and search for that cookie name in the page's scripts. Look for:
   - Vendor names in variable/function names or `window` globals.
   - Scripts in `node_modules/`, `vendor/`, or `wp-content/plugins/` paths.
   - License comments with vendor URLs at the top of the script.
3. **Cross-site prevalence:** Use the `publicwww-search` skill to search for distinctive
   selectors, script URLs, or copy strings. If the same popup markup appears on many
   sites, it's a CMP.

## CMP Discovery with PublicWWW

Use the `/publicwww-search` skill to search website source code for CMP-specific identifiers. This helps determine if a cookie popup is from a shared third-party CMP (warranting a generic rule) or is site-specific. It also helps find additional test URLs for existing rules and region-specific test sites.

Requires `PUBLICWWW_KEY` environment variable.

## Verification

After creating or modifying a rule:

1. `npm run build-rules` — rebuild rules.json (required for tests)
2. `npm run rule-syntax-check` — validate rule JSON against schema
3. `npx playwright test tests/<name>.spec.ts` — run the E2E test
4. `npm run prepublish` — full build including extension bundle
5. Check the rule works across geographic regions using available regional-testing tooling.
