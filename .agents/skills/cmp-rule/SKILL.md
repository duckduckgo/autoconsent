---
name: cmp-rule
description: Creates or fixes autoconsent CMP rules for cookie consent popups. Use when a site has an unhandled popup (no CMP detected), an existing rule fails (opt-out broken, selectors outdated, CMP updated), or a user reports a cookie banner issue.
---

# CMP Rule: Create or Fix

## Step 1: Diagnose

Load the site with the autoconsent extension (`dist/addon-mv3/`) and check devtools
console. **Take a screenshot** — a screenshot reliably shows whether a popup is present.

| Console output | Action |
|----------------|--------|
| No CMP detected | **Create** — go to Step 2 |
| "Found CMP: [name]" + `optOutResult: false` | **Fix** — go to Step 3 |
| "Found CMP: [name]" + `optOutResult: true` | Rule works — nothing to do |

---

## Step 2: Create a New Rule

### 2a: Check for existing rules

```bash
ls rules/autoconsent/ | grep -i <keyword>
grep -rl "<selector-or-class>" rules/autoconsent/ lib/cmps/
```

### 2b: Identify the CMP provider

**Prefer a generic CMP rule over a site-specific rule when possible.** One CMP rule can
cover thousands of sites. If the popup is genuinely custom-built, a site-specific rule
is the right call.

Investigation techniques (roughly in order of speed):

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

If the CMP already has an autoconsent rule, extend it rather than creating a new one.

### 2c: Choose the rule type

| Popup pattern | Rule type |
|--------------|-----------|
| Reject button visible | One-click: `waitForThenClick "#reject"` |
| Settings then reject | Two-click (very common): click manage, then reject |
| Settings, uncheck, save | Multi-step: use if/then/else |
| Only accept/close/dismiss (no reject) | Cosmetic: `"cosmetic": true` with `hide` steps |
| CMP has JS API, no reject in DOM | Eval-based: `{ "eval": "SNIPPET_NAME" }` |
| Complex async/iframe logic | Code-based (`lib/cmps/`) — rarely needed |

Examine the popup carefully — scroll down (reject buttons are sometimes below the
fold) and click settings/manage buttons to see what's behind them.

If optOut and optIn would click the same element, or there is
no reject/decline/refuse button at all, the rule MUST be cosmetic.

### 2d: Write the rule

Run `npm run create-rule` to scaffold the JSON file and test spec.

**Start simple.** Get the basic flow working before adding fallback paths or regional
variants. See [examples](examples.md) for common patterns and
[rule syntax](../../../docs/rule-syntax.md) for the full field/step reference.

Key constraints:
- `detectCmp` / `detectPopup`: Must be fast. Do NOT use `{ "wait": N }` — the engine
  retries automatically.
- `prehideSelectors`: Keep narrow — overly broad selectors hide the whole page.
  Prehide injects `opacity: 0`, so any `visible`/`waitForVisible`/`detectPopup`
  check on a prehidden element will fail. Never prehide elements you later need
  to check visibility on.
- `test`: Prefer `cookieContains` when the CMP stores consent in cookies.
- Set `runContext.urlPattern` for site-specific rules.
- Set `minimumRuleStepVersion: 2` if using `removeClass`, `setStyle`, or `addStyle`.
- For popup inside shadow DOM or same-origin iframe, use
  [chained selectors](reference.md#iframes-and-shadow-dom). For cross-origin
  iframes, use a [frame-only rule](reference.md#cross-origin-iframes).
- Follow [selector best practices](reference.md#selector-best-practices) — avoid
  generated class hashes and dynamic IDs.
- Do not modify engine files (`lib/rules.ts`, `playwright/runner.ts`, etc.).
  Work within existing rule syntax and test harness capabilities.
- Do not include empty strings in `runContext` fields — they break compact
  encoding round-trips. Omit fields instead.

#### Eval snippets

When the CMP has a JS API and no reject button in the DOM:

1. Add a snippet to `lib/eval-snippets.ts` (must return truthy on success).
2. Reference in the rule: `{ "eval": "EVAL_MYCMP_OPTOUT" }`.

Prefer DOM-based steps when possible — eval is a last resort.

### 2e: Create the test spec

```typescript
import generateCMPTests from '../playwright/runner';

generateCMPTests('<name>', [
    'https://example.com/',
    'https://another-example.com/',
]);
```

Options: `skipRegions`, `onlyRegions`, `testOptIn`, `testSelfTest`.

For CMP rules, include test URLs from multiple sites — use PublicWWW results from
step 2b. Then go to **Step 4**.

---

## Step 3: Fix a Broken Rule

### Diagnose by failure stage

See also [quick diagnosis table](reference.md#quick-diagnosis).

| Failed stage | Common causes | Fix approach |
|-------------|---------------|-------------|
| detectCmp / detectPopup | Selectors outdated, shadow DOM/iframe, region-dependent | Inspect live DOM, update selectors |
| optOut | Button renamed, A/B variant, race condition | Update selectors, add if/then/else, use `waitForThenClick` |
| selfTest | Cookie name/format changed | Inspect `document.cookie` after manual reject, update `test` |
| Cosmetic — site broken | Scroll lock, overlay | See [cosmetic breakage fixes](reference.md#cosmetic-breakage-fixes) |

### Apply the fix

**JSON rules:**
1. Read the rule and identify the broken step from logs/inspection.
2. Update selectors in **all occurrences** — `detectCmp`, `detectPopup`, `optOut`, and
   `test` often share selectors.

**Adding fallback paths:** Use if/then/else for CMP variants (regional, A/B test,
version). See [examples](examples.md#conditional--eval-fallback).

**Code-based rules:** Trace the failing path in `lib/cmps/`. Add detection for new
variants. Avoid hardcoded site-specific values.

Then go to **Step 4**.

---

## Step 4: Test and Verify

```
- [ ] Build rules: npm run build-rules
- [ ] Validate schema: npm run rule-syntax-check
- [ ] Unit tests: npm run test:lib (catches compaction round-trip failures)
- [ ] Lint + format: npm run lint-fix
- [ ] Browser check: popup handled, page scrolls, elements clickable, prehide not too broad
- [ ] Playwright test: npx playwright test tests/<name>.spec.ts
- [ ] For CMP rules: test on multiple sites using the CMP
```

---

## Further reference

- [Selector best practices](reference.md#selector-best-practices), [cosmetic breakage fixes](reference.md#cosmetic-breakage-fixes), [iframes/shadow DOM](reference.md#iframes-and-shadow-dom)
- [Real rule examples](examples.md) (two-click, multi-step, conditional+eval, cosmetic)
- [Complete rule syntax](../../../docs/rule-syntax.md) (all step types, conditionals, element selectors)
