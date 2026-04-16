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
variants. See [docs/rule-syntax.md](../../../docs/rule-syntax.md) for the full
field/step reference.

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
- Do not modify engine files (`lib/rules.ts`, `playwright/runner.ts`, etc.).
  Work within existing rule syntax and test harness capabilities.
- Do not include empty strings in `runContext` fields — they break compact
  encoding round-trips. Omit fields instead.

#### Selector strategy

Prefer selectors stable across builds and locales:

**Good:** `[data-testid="cookie-reject"]`, `#sp-cc-accept`, `[class*="cookie-banner"]`, `button[data-a-target="consent-banner-accept"]`

**Bad — avoid:** `.sd-cmp-3cRQ2` / `.css-1a2b3c` (CSS module hashes), `#react-aria-:r1:` / `#radix-\:0\:` (framework dynamic IDs), full body class lists, deep structural chains like `div:nth-child(2):not([id]) > div:not([id])`

Priority: data attributes > stable IDs > class substrings (`[class*="..."]`) > structural CSS > XPath (last resort).

#### Iframes and shadow DOM

Array selectors pierce shadow DOM and same-origin iframes. Each selector in the array
scopes into the previous match's `.shadowRoot` or `.contentDocument`:

```json
["#shadow-host", "button.reject"]
["#cmp-container iframe", ".opt-out-btn"]
```

Single-string selectors cannot pierce — use arrays whenever the target is inside a
shadow root or same-origin iframe.

**Cross-origin iframes** (iframe `src` domain differs from page domain) cannot be
pierced by chained selectors. Create a separate frame-only rule:

```json
{
  "name": "example-cmp-frame",
  "runContext": { "main": false, "frame": true, "urlPattern": "^https://cmp\\.example\\.com/" },
  "detectCmp": [{ "exists": ".cmp-banner" }],
  ...
}
```

#### Cosmetic breakage fixes

When using `"cosmetic": true`, the CMP may lock scrolling or add overlays. Add fixes
AFTER the `hide` step, marked `"optional": true`:

| Problem | Fix |
|---------|-----|
| Scroll lock via CSS class | `{ "removeClass": "no-scroll", "selector": "body", "optional": true }` |
| Scroll lock via inline style | `{ "addStyle": "overflow: auto !important", "selector": "body", "optional": true }` |
| Overlay blocking clicks | `{ "hide": "#overlay", "optional": true }` |
| Body position lock | `{ "setStyle": "", "selector": "body", "optional": true }` |

Using `removeClass`, `setStyle`, or `addStyle` requires `"minimumRuleStepVersion": 2`.

#### Eval snippets

When the CMP has a JS API and no reject button in the DOM:

1. Add a snippet to `lib/eval-snippets.ts` (must return truthy on success).
2. Reference in the rule: `{ "eval": "EVAL_MYCMP_OPTOUT" }`.

Prefer DOM-based steps when possible — eval is a last resort.

#### Example rules

**Two-click** (manage then save, site-specific) — `rules/autoconsent/canyon-com.json`:
```json
{
  "name": "canyon.com",
  "runContext": { "urlPattern": "^https://www\\.canyon\\.com/" },
  "prehideSelectors": ["div.modal.cookiesModal.is-open"],
  "detectCmp": [{ "exists": "div.modal.cookiesModal.is-open" }],
  "detectPopup": [{ "visible": "div.modal.cookiesModal.is-open" }],
  "optIn": [{ "click": "div.cookiesModal__buttonWrapper > button[data-closecause=\"close-by-submit\"]" }],
  "optOut": [
    { "click": "div.cookiesModal__buttonWrapper > button[data-closecause=\"close-by-manage-cookies\"]" },
    { "waitForThenClick": "button#js-manage-data-privacy-save-button" }
  ]
}
```

**Multi-step** (manage, uncheck toggles, save) — `rules/autoconsent/twitch.json`:
```json
{
  "name": "twitch.tv",
  "runContext": { "urlPattern": "^https?://(www\\.)?twitch\\.tv" },
  "prehideSelectors": ["div:has(> .consent-banner .consent-banner__content--gdpr-v2)"],
  "detectCmp": [{ "exists": ".consent-banner .consent-banner__content--gdpr-v2" }],
  "detectPopup": [{ "visible": ".consent-banner .consent-banner__content--gdpr-v2" }],
  "optOut": [
    { "hide": "div:has(> .consent-banner .consent-banner__content--gdpr-v2)" },
    { "click": "button[data-a-target=\"consent-banner-manage-preferences\"]" },
    { "waitFor": "input[type=checkbox][data-a-target=tw-checkbox]" },
    { "click": "input[type=checkbox][data-a-target=tw-checkbox][checked]:not([disabled])", "all": true, "optional": true },
    { "waitForThenClick": "[data-a-target=consent-modal-save]" },
    { "waitForVisible": ".ReactModalPortal:has([data-a-target=consent-modal-save])", "check": "none" }
  ]
}
```

**Conditional + eval fallback** (generic CMP) — `rules/autoconsent/didomi.json`:
```json
{
  "name": "didomi",
  "prehideSelectors": ["#didomi-popup,.didomi-popup-container,.didomi-popup-notice"],
  "detectCmp": [{ "visible": "#didomi-host" }],
  "detectPopup": [{ "visible": "#didomi-popup, #didomi-notice", "check": "any" }],
  "optIn": [{ "waitForThenClick": "#didomi-notice-agree-button" }],
  "optOut": [{
    "if": { "exists": "#didomi-notice-disagree-button,.didomi-continue-without-agreeing" },
    "then": [{ "waitForThenClick": "#didomi-notice-disagree-button,.didomi-continue-without-agreeing" }],
    "else": [{ "eval": "EVAL_DIDOMI_OPT_OUT" }]
  }],
  "test": [{ "eval": "EVAL_DIDOMI_TEST" }]
}
```

**Cosmetic** (no reject button, hide-only) — `rules/autoconsent/ally.json`:
```json
{
  "name": "ally",
  "cosmetic": true,
  "runContext": { "urlPattern": "^https://(www\\.)?ally\\.com/" },
  "prehideSelectors": ["div:has(> div > button[allytmln=ally-cookie-consent])"],
  "detectCmp": [{ "exists": "button[allytmln=ally-cookie-consent]" }],
  "detectPopup": [{ "visible": "button[allytmln=ally-cookie-consent]" }],
  "optIn": [{ "waitForThenClick": "button[allytmln=ally-cookie-consent]" }],
  "optOut": [{ "hide": "div:has(> div > button[allytmln=ally-cookie-consent])" }]
}
```

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

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| No CMP detected | `detectCmp` selectors outdated | Update selectors to match current DOM |
| Popup not found | Element exists but isn't visible | Check CSS visibility, timing, z-index |
| optOut failed | Click target moved or renamed | Update `optOut` selectors |
| selfTest failed | Consent cookie name/format changed | Inspect `document.cookie` after manual reject, update `test` |
| Popup hidden, can't scroll | CMP adds scroll lock class/style | Add `removeClass` or `addStyle` step |
| Popup hidden, overlay blocks | CMP overlay not hidden | Add extra `hide` step for overlay |
| Works in one region, fails in another | Regional CMP variant | Add if/then/else fallback |
| Works manually, fails in Playwright | Timing / race condition | Use `waitForThenClick` instead of `click` |

### Apply the fix

**JSON rules:**
1. Read the rule and identify the broken step from logs/inspection.
2. Update selectors in **all occurrences** — `detectCmp`, `detectPopup`, `optOut`, and
   `test` often share selectors.

**Adding fallback paths:** Use if/then/else for CMP variants (regional, A/B test,
version). See the didomi conditional example above.

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
