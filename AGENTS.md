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
  "test": [{ "cookieContains": "consent=rejected" }],
  "minimumRuleStepVersion": 1
}
```

For the complete rule syntax reference (all step types, element selectors, conditionals, etc.), see [docs/rule-syntax.md](docs/rule-syntax.md).

### prehideSelectors

`prehideSelectors` inject CSS early (before the CMP is even detected) to prevent the cookie popup from flickering on screen. They use `opacity: 0` (not `display: none`) so the popup still occupies layout space and detection via `visible` checks still works. If opt-out doesn't start within 2 seconds, the elements are automatically unhidden to avoid permanently hiding page content.

Keep prehideSelectors **narrow** — they are applied across all matching rules simultaneously, so an overly broad selector (e.g. `body`) could hide the entire page during the 2-second window.

### minimumRuleStepVersion

New step types are added to the autoconsent engine over time. `minimumRuleStepVersion` declares which version of the step format a rule requires. Clients that don't support the required version silently skip the rule, preventing failures on older app versions.

**Version history:**
- `1` (default) — all original step types (`exists`, `visible`, `waitFor`, `click`, `waitForThenClick`, `wait`, `hide`, `if`/`then`/`else`, `any`, `eval`, `cookieContains`, etc.)
- `2` — added `removeClass`, `setStyle`, `addStyle`

**When to set it:** Omit the field (or set to `1`) if the rule only uses original step types. Set to `2` if the rule uses `removeClass`, `setStyle`, or `addStyle`. When future versions add new step types, set accordingly.

### Code-Based Rules

For CMPs requiring complex  non-linear logic, CMP API interaction, or complex multi-path flows, use a TypeScript class extending `AutoConsentCMPBase` in `lib/cmps/`. Examples: `sourcepoint-frame.ts`, `onetrust.ts`, `cookiebot.ts`, `consentmanager.ts`.

Code-based rules implement the `AutoCMP` interface: `detectCmp()`, `detectPopup()`, `optOut()`, `optIn()`, and optionally `test()`. They have access to DOM helpers like `this.click()`, `this.waitForElement()`, `this.waitForVisible()`, and `this.elementExists()`.

### When to Use Code vs JSON

- **JSON:** Linear consent flows, DOM-based detection, single-path opt-out. JSON rules are preferable because they can be shipped in DuckDuckGo apps without a full app release.
- **Code:** Multi-path branching, CMP JavaScript API calls, `Promise.race()` for competing UI states, complex state machines (e.g., Sourcepoint serving GDPR/CCPA/US National variants on different URL paths).

### Selector Strategy

Prefer selectors in this order (most stable first):

1. **Stable data attributes:** `[data-testid="cookie-reject"]`, `[data-action="sp-cc"]`, `[data-qa="allow-all-cookies"]`
2. **Stable IDs:** `#sp-cc-accept`, `#cookie-banner` — but avoid dynamic IDs from React Aria (`#react-aria*`), Radix (`#radix-\:*\:`), or CSS Modules (`.sd-cmp-3cRQ2`), which change between builds/sessions.
3. **Semantic class substrings:** `[class*="cookie-banner"]`, `[class*="reject"]` — avoid full body class lists (`body.home.wp-singular.page-template...`) which break across pages.
4. **Structural CSS:** `#banner button.secondary` — avoid deep `nth-child` chains from generated rules.
5. **XPath text matching (fallback):** `xpath///button[contains(., 'Reject')]` — use as a last resort since button text is language-specific and breaks across locales. Same caution applies to `aria-label` attributes, which are often localized.
6. **Array selectors** for shadow DOM / iframe piercing: `["host-element", "button"]` finds `button` inside the shadow root of `host-element`. Each string in the array narrows the search scope — if an intermediate element has an open `shadowRoot`, the next selector runs inside it; if it's a same-origin iframe, the next selector runs inside its `contentDocument`. Use when a CMP renders inside shadow DOM or a same-origin iframe.

When writing or reviewing selectors, also watch out for:
- **Hardcoded attribute values** that are site-specific — use generic selectors in code-based rules.
- **Over-qualified selectors** from generated rules — e.g. `div[id][name][role][aria-modal][tabindex][lang]` requiring every attribute to exist, or redundant `:nth-child(2)#some-id` where the ID alone suffices.

## Debugging and Fixing Rules

### Identifying Broken Rules

1. **Use a real browser** to investigate. A real browser in a computer-use subagent is **highly preferred** over Playwright or Puppeteer-based scripts — cookie popups often behave differently in headless/automated browsers.
2. **Playwright test failures** are a secondary signal. Run the specific test:
   ```bash
   npx playwright test tests/sirdata.spec.ts --project webkit
   ```
3. **Check test output** for which stage failed: `cmpDetected`, `popupFound`, `autoconsentDone`, `optOutResult`, `selfTestResult`.
4. **Use the test extension** (`dist/addon-mv3/`) for manual debugging. Load it in Chrome, visit the site, and check the devtools panel for step-by-step logs.

### Common Failure Modes

**Race conditions:** Consent popups load asynchronously. Use `waitFor` / `waitForThenClick` / `waitForVisible` instead of bare `exists` / `click`. Add `{ "wait": 500 }` before critical actions when the CMP has known async initialization. In code-based rules, use `Promise.race()` for multiple possible UI states. **Never** use `{ "wait": N }` in `detectCmp` or `detectPopup` — the engine handles retries internally.

**Incorrect consent action selectors:** Generated rules sometimes target a privacy policy link instead of the reject button. Ensure `optOut` steps target an actual reject/decline button.

**Region-dependent behavior:** Many CMPs show different dialogs by region (GDPR in EU, CCPA in US). See [Regional Differences](#regional-differences) below.

### Fixing JSON Rules

1. Read the existing rule to understand its current selectors and flow.
2. Identify the broken step from test output or by inspecting the site.
3. Edit the JSON file — apply the fix to every occurrence of the selector within the file (`detectCmp`, `detectPopup`, `optOut`, and `test` often use similar selectors).
4. For site-specific rules, double-check if the popup is still site-specific. If not, consider if a generic rule is more appropriate.
5. **Always update the corresponding test spec** in `tests/`. If no spec exists, create one.
6. **Cross-check other rules** — search for the same selectors or CMP provider name across `rules/autoconsent/` and `rules/generated/` to find other rules that may need the same change.
7. For generated rules, the same CMP may appear across multiple region files (`auto_CH_*.json`, `auto_DE_*.json`, etc.). Apply the fix to all affected files.
8. Run `npm run lint` to validate.

### Fixing Code-Based Rules

1. Read the CMP class in `lib/cmps/` and trace the failing code path.
2. Avoid hardcoded attribute values that are site-specific.
3. Add path/state detection for new CMP variants. Check `location.pathname`, button presence, or URL parameters.
4. Add fallback paths when variants may not have the expected buttons.

### Adding Fallback Paths

Use `if`/`then`/`else` for region-dependent or variant-dependent flows:

```json
{
  "if": { "exists": "#reject-button" },
  "then": [{ "waitForThenClick": "#reject-button" }],
  "else": [{
    "if": { "exists": "#manage-cookies" },
    "then": [
      { "waitForThenClick": "#manage-cookies" },
      { "waitForThenClick": "#reject-all" }
    ],
    "else": [
      { "waitForThenClick": "[role='button'][title='Close']" }
    ]
  }]
}
```

## Adding New Rules

1. Run `npm run create-rule` to scaffold the JSON + test spec.
2. **Check if the popup is from a third-party CMP provider** (e.g. OneTrust, Cookiebot, Sourcepoint). If so, prefer extending or fixing the existing generic rule rather than creating a site-specific one.
3. Fill in `detectCmp`, `detectPopup`, `optOut`, `optIn` with stable selectors. Do **not** use `{ "wait": N }` steps in `detectCmp` or `detectPopup` — detection must be fast and non-blocking (the engine retries automatically).
4. Add a `test` array — prefer `cookieContains` when the CMP stores consent in cookies.
   - JSON rules can also use `{ "eval": "SNIPPET_NAME" }` steps to execute predefined JavaScript snippets from `lib/eval-snippets.ts`. Useful for calling CMP APIs (e.g., `window.Cookiebot`, `__cmp('getCMPData')`) in detection, opt-out, or test phases. Each snippet is a named function that returns a boolean. New snippets must be added to `lib/eval-snippets.ts` and referenced by name in the rule JSON.
5. **Always create or update the corresponding test spec** in `tests/`.
6. **Cross-check other rules** — search for the same selectors or CMP provider name across `rules/autoconsent/` and `rules/generated/` to see if other rules need the same change or already cover this CMP.
7. Use `data/coverage.json` to find example sites for testing. It contains per-CMP, per-region URLs: `{ "CmpName": { "REGION": { "exampleSites": [...] } } }`.
8. Run `npm run lint` and `npm run test:lib`.
9. Test with Playwright: `npx playwright test tests/my-cmp.spec.ts --project webkit`.

### When Generated Rules Need Fixes

Generated rules (`rules/generated/auto_XX_domain_hash.json`) are created by a crawler and often have:
- Deep `nth-child` chains that break on layout changes
- Dynamic IDs from UI frameworks
- Long body class lists
- Over-qualified selectors requiring many attributes simultaneously

Fixes typically need to be applied across all region variants of the same domain (e.g., `auto_CH_kitbag.com_*.json`, `auto_DE_kitbag.com_*.json`). Search for the domain to find all related files.

## Cosmetic Rules

Cosmetic rules hide the cookie popup via CSS rather than clicking a reject button. They are marked with `"cosmetic": true` and use `hide` steps in their `optOut` array. Use cosmetic rules when a popup has no reject/decline button — only an "Accept" or "Close" option.

### When to Use Cosmetic vs Click-Based Rules

A popup should use a **click-based rule** (the default) if it has a reject/decline button. This includes buttons with text like "Reject all", "Only necessary cookies", "Decline", and equivalents in other languages. If the popup only has "Accept" / "OK" / "Close" / "Got it" and no way to reject, use a **cosmetic rule** to hide it.

### Common Breakage Patterns

Hiding a popup can break the page if the CMP also locks scrolling or adds overlays. Watch for:

**Scroll lock via CSS class:** `body` or `html` gets a class like `no-scroll`, `modal-open`, `overflow-hidden`. Fix with:
```json
{ "removeClass": "no-scroll", "selector": "body" }
```

**Scroll lock via inline style:** `body.style.overflow = "hidden"`. Fix with:
```json
{ "addStyle": "overflow: auto !important", "selector": "body" }
```

**Overlay preventing clicks:** A `position: fixed` div with high z-index covers the page. Fix by hiding it:
```json
{ "hide": "#overlay-selector" }
```

**Body position lock:** `body.style.position = "fixed"` with `top: -XXpx`. Fix with:
```json
{ "setStyle": "", "selector": "body" }
```

### Cosmetic Rule Structure

```json
{
  "name": "example-cosmetic",
  "cosmetic": true,
  "prehideSelectors": ["#cookie-banner"],
  "detectCmp": [{ "exists": "#cookie-banner" }],
  "detectPopup": [{ "visible": "#cookie-banner" }],
  "optOut": [
    { "hide": "#cookie-banner" },
    { "removeClass": "no-scroll", "selector": "body", "optional": true }
  ],
  "optIn": [{ "waitForThenClick": "#accept-button" }]
}
```

Add breakage fix steps AFTER the `hide` step in `optOut`. Mark breakage fixes as `"optional": true` since they may not always apply.

## Triaging Broken Sites

When investigating a site where cookie popup handling is broken or missing:

### Step 1: Check Current State

Load the bundled extension in Chrome (`dist/addon-mv3/` after `npm run prepublish`), visit the site, and check the devtools panel for autoconsent logs. Determine whether:
- An existing rule matched but failed (which stage? `detectCmp`, `detectPopup`, `optOut`?)
- No rule matched at all

### Step 2: Diagnose

If an **existing rule matched but failed**: identify the broken step from the logs, inspect the site to understand what changed (new selectors, different layout, region variant), and fix the rule.

If **no rule matched**: determine the CMP type. Check if the popup is from a known CMP (OneTrust, Sourcepoint, Cookiebot, etc.) by inspecting the banner's HTML, class names, and script sources. If it's a known CMP, the existing rule may need updated detection selectors. If it's unknown, create a new rule.

**Always check if the popup is from a third-party CMP provider.** If so, prefer creating or extending a generic rule rather than a site-specific one. Use `data/coverage.json` to find additional example sites for the same CMP to verify the rule works broadly.

### Step 3: Determine Rule Type

- If the popup has a **reject/decline button** → create or fix a click-based rule
- If the popup has **no reject option** (only accept/close) → create a cosmetic rule
- If the CMP requires **complex logic** (API calls, multiple UI states, iframe communication) → use a code-based CMP class

### Step 4: Implement and Test

1. Create or edit the rule file
2. Add or update the test spec in `tests/`
3. Run `npm run lint` to validate
4. Test locally: `npx playwright test tests/<cmp>.spec.ts --project webkit`
5. Test in multiple regions if the CMP is region-dependent (requires both `REGION` and `PROXY_SERVER` — see [Testing Across Regions](#testing-across-regions))
6. For cosmetic rules, verify no breakage (scrolling works, page is interactable)

## Regional Differences

CMPs behave differently depending on the user's region due to different privacy regulations:

- **EU/EEA (GDPR):** Full consent dialog with explicit reject/accept options. Most rules target this variant.
- **US (CCPA/state laws):** Often a simpler notice with just a "Close" button, or a "Do Not Sell" link. Some CMPs show nothing at all in the US.
- **Other regions:** May show GDPR-like dialogs, simplified notices, or nothing.

### Handling Regional Variants in Rules

Use `if`/`then`/`else` conditionals to handle different UIs within a single rule. For code-based rules, add path detection (e.g., Sourcepoint's `/privacy-manager/index.html` vs `/us_pm/index.html`).

### Testing Across Regions

Two things are needed to test from a specific region:

1. **`REGION` env var** — filters which test URLs to run (from `data/coverage.json`). This only controls test selection, it does **not** change where requests come from.
2. **`PROXY_SERVER` env var** — routes browser traffic through a geographic proxy so sites see the correct region. Without a proxy, the site sees your real location regardless of `REGION`.

```bash
# Local: only filters tests, requests come from your real location
REGION=DE npx playwright test tests/sirdata.spec.ts --project webkit

# With proxy: tests are filtered AND requests are routed through the proxy
REGION=DE PROXY_SERVER=socks5://proxy.example:1080 npx playwright test tests/sirdata.spec.ts --project webkit
```

In CI, Jenkins loads region-specific `.env` files that set both `REGION` and `PROXY_SERVER` together.

Test specs support `skipRegions` and `onlyRegions` to control when tests run:

```typescript
generateCMPTests('Sirdata', ['https://gizmodo.com/'], {
    skipRegions: ['US'],   // skip test in these regions
    onlyRegions: [],       // only run in these regions
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
| Unit tests | `npm run test:lib` |
| Single CMP E2E test | `npx playwright test tests/<cmp>.spec.ts --project webkit` |
| Full E2E suite | `npm run test` |
