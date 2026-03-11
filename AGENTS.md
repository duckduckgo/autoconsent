# Autoconsent Agent Guide

This guide covers debugging, fixing, and verifying consent rules in the autoconsent library. Rules come in two forms: **declarative JSON rules** (`rules/autoconsent/`, `rules/generated/`) and **code-based CMP classes** (`lib/cmps/`). Both follow the same lifecycle: detect CMP, detect popup, opt out/in, and optionally self-test.

## Project Layout

```
lib/              TypeScript source for the autoconsent engine
lib/cmps/         Code-based CMP rule classes (sourcepoint, onetrust, etc.)
lib/rules.ts      Type definitions for AutoConsentCMPRule and rule steps
lib/eval-snippets.ts  Eval snippets for main-world JS execution
rules/autoconsent/    Hand-maintained JSON rules (~280 files)
rules/generated/      Auto-generated JSON rules (~3500 files, auto_XX_domain_hash.json)
rules/build.ts        Merges all rules into rules.json, consentomatic.json, compact-rules.json
tests/                Playwright E2E test specs (one per CMP)
tests-wtr/            Web Test Runner unit tests for DOM actions and rule logic
playwright/runner.ts  Test harness: generateCMPTests(name, urls, options)
addon/                Browser extension (MV3 + Firefox)
scripts/              Build and validation scripts
```

## Key Commands

| Command | Purpose |
|---------|---------|
| `npm run lint` | ESLint + Prettier + JSON rule schema validation |
| `npm run lint-fix` | Auto-fix lint and formatting issues |
| `npm run rule-syntax-check` | Validate `rules/autoconsent/*.json` against the TypeScript schema |
| `npm run test:lib` | Unit tests (Web Test Runner) |
| `npm run test` | All Playwright E2E tests |
| `npm run test:webkit` | Playwright tests in WebKit only |
| `npm run test:chrome` | Playwright tests in Chrome only |
| `npm run prepublish` | Full build: compile filterlist, build rules, bundle |
| `npm run build-rules` | Rebuild `rules.json`, `consentomatic.json`, `compact-rules.json` |
| `npm run create-rule` | Scaffold a new JSON rule + test spec |

## Declarative JSON Rules

JSON rules live in `rules/autoconsent/` (hand-maintained) and `rules/generated/` (auto-generated). Each file defines one CMP rule following the `AutoConsentCMPRule` type in `lib/rules.ts`.

### Rule Structure

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

### Available Rule Steps

**Detection:** `exists`, `visible`, `cookieContains`, `eval`
**Waiting:** `waitFor`, `waitForVisible`, `wait`
**Actions:** `click`, `waitForThenClick`, `hide`
**Logic:** `if`/`then`/`else`, `any`, `negated`
**Modifiers:** `optional: true` (ignore step failure), `comment` (documentation)

### Element Selectors

Selectors can be a string or an array of strings:
- **CSS:** `"#id"`, `".class"`, `"[data-testid='value']"`
- **XPath:** `"xpath///button[contains(., 'Reject')]"`
- **Chained (shadow DOM / iframe piercing):** `["#shadow-host", "button.reject"]`

### Conditional Branching

Use `if`/`then`/`else` for region-dependent or variant-dependent flows:

```json
{
  "if": { "exists": "#reject-button" },
  "then": [{ "waitForThenClick": "#reject-button" }],
  "else": [
    { "waitForThenClick": "#manage-cookies" },
    { "waitForThenClick": "#reject-all" }
  ]
}
```

### `runContext` for Scope Control

```json
{
  "runContext": {
    "main": true,
    "frame": false,
    "urlPattern": "^https://example\\.com/"
  }
}
```

Generated rules typically include `urlPattern` for domain-specific matching.

## Code-Based CMP Rules

For CMPs requiring non-linear logic, CMP API interaction, or complex multi-path flows, use a TypeScript class extending `AutoConsentCMPBase` in `lib/cmps/`. Existing examples: `sourcepoint-frame.ts`, `onetrust.ts`, `cookiebot.ts`, `consentmanager.ts`.

Code-based rules implement the `AutoCMP` interface: `detectCmp()`, `detectPopup()`, `optOut()`, `optIn()`, and optionally `test()`. They have access to DOM helpers like `this.click()`, `this.waitForElement()`, `this.waitForVisible()`, and `this.elementExists()`.

### When to Use Code vs JSON

- **JSON:** Linear consent flows, DOM-based detection, single-path opt-out.
- **Code:** Multi-path branching, CMP JavaScript API calls, `Promise.race()` for competing UI states, complex state machines (e.g., Sourcepoint serving GDPR/CCPA/US National variants on different URL paths).

## Debugging Rules

### Identifying Broken Rules

1. **Playwright test failures** are the primary signal. Run the specific test:
   ```bash
   npx playwright test tests/sirdata.spec.ts --project webkit
   ```
2. **Check test output** for which stage failed: `cmpDetected`, `popupFound`, `autoconsentDone`, `optOutResult`, `selfTestResult`.
3. **Use the test extension** (`dist/addon-mv3/`) for manual debugging. Load it in Chrome, visit the site, and check the devtools panel for step-by-step logs.

### Common Failure Modes

#### Dynamic / Generated IDs

**Symptom:** Rule works initially but breaks on subsequent page loads or across regions.

Frameworks like React Aria, Radix, and CSS Modules generate IDs that change between builds or sessions. Examples from recent fixes:

- `#react-aria9784873935-1` — changes per build
- `#radix-\:r0\:` — changes per session
- `.sd-cmp-3cRQ2` — CSS Module hash, changes per build

**Fix:** Remove the dynamic ID fragment from the selector. Replace `button#react-aria9784873935-1` with just `button:nth-child(2)` or a more stable attribute like `[data-testid]`.

#### Overly Specific Body Class Selectors

**Symptom:** Rule only works on the exact page it was generated from.

Generated rules sometimes include entire `body` class lists like `body.home.wp-singular.page-template...`. These break when the user navigates to a different page on the same site.

**Fix:** Simplify to `body > div.cookie-consent` or similar, keeping only the semantically meaningful classes.

#### Invalid Element Names

**Symptom:** Selector never matches.

Some generated rules contain typos like `btn#reject-cookie` instead of `button#reject-cookie`.

**Fix:** Correct the element name.

#### Incorrect Consent Action Selectors

**Symptom:** Rule clicks a "privacy info" link instead of a "reject" button, or opts in instead of out.

Generated rules sometimes target the wrong element for the opt-out action — e.g., a link to the privacy policy instead of the reject button.

**Fix:** Ensure `optOut` steps target an actual reject/decline button. Prefer `[data-testid*="reject"]` or `xpath///button[contains(., 'Reject')]` over structural selectors. Simplify `detectCmp`/`detectPopup` to target the banner container rather than a deep child element.

#### Race Conditions and Timing

**Symptom:** Rule works intermittently, especially in CI or on slow connections.

Consent popups are often loaded asynchronously. The popup may not be in the DOM when the rule runs, or an iframe may not have loaded yet.

**Fix:**
- Use `waitFor` / `waitForThenClick` / `waitForVisible` instead of bare `exists` / `click`.
- Add a `{ "wait": 500 }` step before critical actions when the CMP has known async initialization.
- In code-based rules, use `Promise.race()` for multiple possible UI states (see `sourcepoint-frame.ts`).

#### Region-Dependent Behavior

**Symptom:** Rule works in EU but fails in US, or vice versa.

Many CMPs show different dialogs by region (GDPR in EU, CCPA in US, or nothing at all). The US variant may have only a "Close" button instead of "Reject all".

**Fix:**
- Use `if`/`then`/`else` to handle variant UIs within a single rule.
- Add `skipRegions` to the test spec when the CMP is region-specific:
  ```typescript
  generateCMPTests('Sirdata', ['https://gizmodo.com/'], {
      skipRegions: ['US'],
  });
  ```
- For code-based rules, add path detection (e.g., Sourcepoint's `/privacy-manager/index.html` vs `/us_pm/index.html`).

## Fixing Rules

### Fixing Declarative JSON Rules

1. **Read the existing rule** to understand its current selectors and flow.
2. **Identify the broken step** from the test output or by inspecting the site.
3. **Edit the JSON file** — apply the same fix to every occurrence of the selector within the file (typically `detectCmp`, `detectPopup`, `optOut`, and `test` all use the same or similar selectors).
4. **For generated rules**, the same CMP may appear across multiple region files (`auto_CH_*.json`, `auto_DE_*.json`, etc.). Apply the fix to all affected files.
5. **Run `npm run lint`** to validate the schema.

### Fixing Code-Based Rules

1. **Read the CMP class** in `lib/cmps/` and trace the failing code path.
2. **Avoid hardcoded attribute values** that are site-specific. Use generic selectors: prefer `[data-choice]:not([class*="sp_choice_type_"])` over `[data-choice="1739968508799"]`.
3. **Add path/state detection** for new CMP variants. Check `location.pathname`, the presence/absence of specific buttons, or URL parameters.
4. **Add fallback paths** when variants may not have the expected buttons. Use conditionals in JSON or `if`/`else` in code.

### Adding Fallback Paths

When a CMP has regional or site-specific variants, nest conditionals:

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

## Verifying Rule Changes

### Automated Verification

1. **Schema validation:**
   ```bash
   npm run rule-syntax-check
   ```
   Validates all `rules/autoconsent/*.json` files against the `AutoConsentCMPRule` TypeScript type using `ts-json-schema-generator` and Ajv. Note: generated rules in `rules/generated/` are not covered by this check.

2. **Lint:**
   ```bash
   npm run lint
   ```
   Runs ESLint, Prettier, and the schema check. This is the same check CI runs.

3. **Unit tests:**
   ```bash
   npm run test:lib
   ```
   Tests DOM action logic, rule compaction, encoding, and heuristics.

4. **E2E tests for a specific CMP:**
   ```bash
   npx playwright test tests/sirdata.spec.ts --project webkit
   ```

5. **Full E2E suite:**
   ```bash
   npm run test
   ```

### Self-Test Verification

Rules can include a `test` array that runs after opt-out to verify the consent was correctly applied. There are two main approaches:

**`cookieContains` (preferred):** Check that the consent cookie contains the expected value. More reliable than DOM checks because cookies persist after the popup is dismissed.

```json
"test": [{ "cookieContains": "CMCCP=AD%3D0" }]
```

**`eval`:** Run a JavaScript snippet defined in `lib/eval-snippets.ts`. Less reliable because it can be affected by CSP policies or page scripts. Use only when cookie-based verification isn't possible.

```json
"test": [{ "eval": "EVAL_ONETRUST_1" }]
```

**`waitForVisible` with `check: "none"`:** Verify the popup is no longer visible after opt-out. Useful as a basic smoke test but doesn't verify consent state.

```json
"test": [{ "waitForVisible": "#cookie-banner", "timeout": 1000, "check": "none" }]
```

### Test Spec Options

Test specs in `tests/` use `generateCMPTests()` from `playwright/runner.ts`:

```typescript
import generateCMPTests from '../playwright/runner';

generateCMPTests('MyCMP', [
  'https://example.com/',
  'https://other-example.com/'
], {
  testOptOut: true,      // test the opt-out flow (default: true)
  testOptIn: true,       // test the opt-in flow (default: true)
  testSelfTest: true,    // run the rule's self-test (default: true)
  skipRegions: ['US'],   // skip test in these regions
  onlyRegions: [],       // only run in these regions
  expectPopupOpen: true, // expect the popup to be visible (default: true)
});
```

### CI Checks

The GitHub Actions workflow (`.github/workflows/checks.yml`) runs:
- `npm run lint` — ESLint, Prettier, schema validation
- `npm run test:lib` — unit tests

Playwright E2E tests run against live sites and are inherently flaky due to site changes, regional differences, and network conditions.

## Common Patterns from Recent Agent Work

### Selector Stability Checklist

When reviewing or writing selectors, verify:

- [ ] No React Aria IDs (`#react-aria*`)
- [ ] No Radix IDs (`#radix-\:*\:`)
- [ ] No CSS Module hashes that look random (e.g., `.sd-cmp-3cRQ2`)
- [ ] No full `body` class lists (keep only semantic classes)
- [ ] No invalid HTML element names (`btn` vs `button`)
- [ ] No hardcoded attribute values that are site-specific
- [ ] Prefer `[data-testid]`, `[role]`, `[title]` for stable targeting
- [ ] Prefer XPath `contains(., 'text')` for button text matching across languages

### Multi-Language XPath

For CMPs that appear in many languages, use XPath with `contains()` for all known translations:

```json
{
  "waitForThenClick": [
    "#cmp-root",
    "xpath///button[contains(., 'Reject all') or contains(., 'Alle ablehnen') or contains(., 'Tout refuser')]"
  ]
}
```

### Adding New Rules

1. Run `npm run create-rule` to scaffold the JSON + test spec.
2. Fill in `detectCmp`, `detectPopup`, `optOut`, `optIn` with stable selectors.
3. Add a `test` array — prefer `cookieContains` when the CMP stores consent in cookies.
4. Run `npm run lint` and `npm run test:lib`.
5. Test with Playwright: `npx playwright test tests/my-cmp.spec.ts --project webkit`.

### When Generated Rules Need Fixes

Generated rules (`rules/generated/auto_XX_domain_hash.json`) are created by a crawler and often have:
- Structural selectors with `nth-child` chains that break on layout changes
- Dynamic IDs from UI frameworks
- Long body class lists
- Invalid element names or selectors

Fixes typically need to be applied across all region variants of the same domain (e.g., `auto_CH_kitbag.com_*.json`, `auto_DE_kitbag.com_*.json`, etc.). Search for the domain to find all related files.
