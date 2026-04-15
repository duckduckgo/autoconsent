---
name: cmp-rule
description: Creates or fixes autoconsent CMP rules for cookie consent popups. Use when a popup needs a new rule (no CMP detected) or an existing rule is broken (opt-out fails, selectors outdated, CMP changed).
---

# CMP Rule: Create or Fix

## Step 1: Diagnose

Load the site with the autoconsent extension (`dist/addon-mv3/`) and check devtools
console. Take a screenshot of the popup.

| Console output | Action |
|----------------|--------|
| No CMP detected | **Create** — go to Step 2 |
| "Found CMP: [name]" + `optOutResult: false` | **Fix** — go to Step 3 |
| "Found CMP: [name]" + `optOutResult: true` | Rule works — nothing to do |

Also run: `npx playwright test tests/<name>.spec.ts`

---

## Step 2: Create a New Rule

### 2a: Check for existing rules

```bash
ls rules/autoconsent/ | grep -i <keyword>
grep -rl "<selector-or-class>" rules/autoconsent/ lib/cmps/
```

### 2b: Identify the CMP provider

**Always prefer a generic CMP rule over a site-specific rule.**

Check DOM for vendor prefixes (`onetrust-`, `didomi-`, `sp_choice_type_`, `cmp-`,
`fc-`, `klaro-`), script sources for CMP domains, and use the `publicwww-search` skill
to check prevalence. If the CMP already has a rule, extend it.

### 2c: Choose the rule type

| Popup pattern | Rule type |
|--------------|-----------|
| Reject button visible | One-click: `waitForThenClick "#reject"` |
| Settings then reject | Two-click (very common): click manage, then reject |
| Settings, uncheck, save | Multi-step: use if/then/else |
| Only accept/close | Cosmetic: `"cosmetic": true` with `hide` steps |
| CMP has JS API, no reject in DOM | Eval-based: `{ "eval": "SNIPPET_NAME" }` |
| Complex async/iframe logic | Code-based (`lib/cmps/`) — rarely needed |

Examine the popup carefully — scroll down (reject buttons are sometimes below the
fold) and click settings/manage buttons to see what's behind them.

### 2d: Write the rule

Run `npm run create-rule` to scaffold the JSON file and test spec.

**Start simple.** Get the basic flow working before adding fallback paths or regional
variants. For field and step type reference, see [docs/rule-syntax.md](../../../docs/rule-syntax.md).

Key constraints:
- `detectCmp` / `detectPopup`: Must be fast. Do NOT use `{ "wait": N }` — the engine
  retries automatically.
- `prehideSelectors`: Keep narrow — overly broad selectors hide the whole page.
- `test`: Prefer `cookieContains` when the CMP stores consent in cookies.
- Set `runContext.urlPattern` for site-specific rules.
- Set `minimumRuleStepVersion: 2` if using `removeClass`, `setStyle`, or `addStyle`.

#### Eval snippets

When the CMP has a JS API and no reject button in the DOM:

1. Add a snippet to `lib/eval-snippets.ts` (must return truthy on success).
2. Reference in the rule: `{ "eval": "EVAL_MYCMP_OPTOUT" }`.
3. Prefer DOM-based steps when possible — eval is a last resort.

### 2e: Create the test spec

```typescript
import generateCMPTests from '../playwright/runner';

generateCMPTests('<name>', [
    'https://example.com/',
    'https://another-example.com/',
]);
```

Options: `skipRegions`, `onlyRegions`, `testOptIn`, `testSelfTest`.

For CMP rules, include test URLs from multiple sites. Use `data/coverage.json` to find
them. Then go to **Step 4**.

---

## Step 3: Fix a Broken Rule

### Diagnose by failure stage

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
3. For CMP providers, check if other rules need the same fix:
   ```bash
   grep -rl "<old-selector>" rules/autoconsent/ rules/generated/
   ```
4. For generated rules (`rules/generated/auto_XX_domain_*.json`), fix all region
   variants.

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
- [ ] Browser check: popup handled, page scrolls, elements clickable, prehide not too broad
- [ ] Playwright test: npx playwright test tests/<name>.spec.ts
- [ ] For CMP rules: test on multiple sites using the CMP
```

---

## Further reference

- [Selector best practices and cosmetic breakage fixes](reference.md)
- [Real rule examples](examples.md) (two-click, multi-step, conditional+eval, cosmetic)
- [Complete rule syntax](../../../docs/rule-syntax.md) (all step types, conditionals, element selectors)
