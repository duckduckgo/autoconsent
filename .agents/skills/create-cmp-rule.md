---
name: create-cmp-rule
description: Creates a new autoconsent JSON rule and test spec for a cookie consent popup. Use when no existing rule matches the popup (devtools console shows no CMP detected).
---

# Create CMP Rule

Step-by-step workflow for creating a new autoconsent rule to handle a cookie consent
popup. Follow these steps in order.

## Step 1: Open the Site in a Browser

Load the site with the autoconsent extension (`dist/addon-mv3/`) and check the
devtools console. Take a screenshot of the popup.

- **"Found CMP: [name]" + failure** → an existing rule is broken. Switch to the
  `fix-cmp-rule` skill instead.
- **"Found CMP: [name]" + success** → the rule already works. Nothing to do.
- **No CMP detected** → no rule exists yet. Continue with step 2.

## Step 2: Examine the Popup

Look at the popup carefully. Identify ALL visible buttons and interactive elements:

- Is there a **reject/decline button**? (e.g. "Reject all", "Only necessary",
  "Decline", "Refuse") → This will be a **click-based rule**.
- Is there only **accept/close**? (e.g. "Accept all", "OK", "Got it", "Close") with
  no way to reject → This will be a **cosmetic rule**.
- Is there a **settings/manage button** that opens more options? Click it and check
  what's behind it.
- Scroll down in the popup — some CMPs hide the reject button below the fold.

## Step 3: Check for Existing Rules

Search the codebase for rules that might already cover this CMP:

```bash
# Search JSON rules
ls rules/autoconsent/ | grep -i <keyword>
grep -rl "<selector-or-class>" rules/autoconsent/

# Search code-based rules
grep -rl "<keyword>" lib/cmps/
```

## Step 4: Identify the CMP Provider

**Always prefer a generic CMP rule over a site-specific rule.** Check:

- **DOM class names/IDs:** Vendor prefixes like `onetrust-`, `didomi-`, `sp_choice_type_`, `cmp-`, `fc-`, `klaro-`, or container IDs like `#onetrust-banner-sdk`, `#didomi-host`, `#CybotCookiebotDialog`.
- **Script sources:** CMP domains like `onetrust.com`, `didomi.io`, `cookiebot.com`.
- **JS code:** Inspect click handlers for vendor names in variable/function names.
- **PublicWWW:** Use the `publicwww-search` skill to check if selectors appear on many sites.

If the popup is from a known CMP, check if a rule already exists in `rules/autoconsent/` or `lib/cmps/`. Extend it rather than creating a new one.

## Step 5: Choose the Rule Type

All of these are JSON rules unless noted otherwise:

| Popup pattern | Rule type | Example |
|--------------|-----------|---------|
| Reject button visible | One-click | `waitForThenClick "#reject"` |
| Settings → reject | Two-click (very common) | Click manage, then click reject |
| Settings → uncheck → save | Multi-step | Use multiple steps, possibly if/then/else |
| Only accept/close | Cosmetic (`"cosmetic": true`) | `hide` the popup |
| CMP has JS API, no reject in DOM | Eval-based (still JSON) | `{ "eval": "SNIPPET_NAME" }` |
| Complex async/iframe logic | Code-based (`lib/cmps/`) | Rare — only when JSON can't express it |

Two-click popups are extremely common. The pattern is: click "Manage preferences" /
"Cookie settings", then click "Reject all" / "Save" (with toggles defaulting to off).

Multi-step flows (3+ steps) can nearly always be expressed in JSON using if/then/else.
Code-based rules in `lib/cmps/` are rarely needed — only for things like
`Promise.race` for competing UI states or cross-iframe message passing.

## Step 6: Write the Rule

Run `npm run create-rule` to scaffold the JSON file and test spec. Then fill in each
section.

### Start simple

Write the minimal rule first. Get the basic flow working before adding fallback
paths, regional variants, or edge cases.

### Key fields

See `AGENTS.md` for the basic JSON structure and `docs/rule-syntax.md` for the
complete step type reference.

**Important:**
- `detectCmp` / `detectPopup`: Must be fast. Do NOT use `{ "wait": N }` here — the
  engine retries automatically.
- `prehideSelectors`: Injected early via CSS `opacity: 0` to prevent flicker. Keep
  narrow — an overly broad selector (e.g. `body`) hides the entire page.
- `test`: Prefer `cookieContains` when the CMP stores consent in cookies.
- `cosmetic`: Set to `true` for cosmetic rules.
- `runContext.urlPattern`: Set for site-specific rules to restrict matching.
- `minimumRuleStepVersion`: Set to `2` if using `removeClass`, `setStyle`, or
  `addStyle`.

### Selector best practices

Use selectors that won't change between builds or locales:

**Good:**
- `[data-testid="cookie-reject"]` — stable test attributes
- `#sp-cc-accept` — stable IDs
- `[class*="cookie-banner"]` — class substrings
- `button[data-a-target="consent-banner-accept"]` — semantic data attributes

**Bad — avoid these:**
- `.sd-cmp-3cRQ2`, `.css-1a2b3c` — CSS module hashes (4+ random chars = generated)
- `#react-aria-:r1:`, `#radix-\:0\:` — framework-generated dynamic IDs
- `body.home.wp-singular.page-template-default` — full body class lists
- `div:nth-child(2):not([id]) > div:not([id])` — deep structural chains

### Eval snippets

If the CMP has a JavaScript API and no reject button in the DOM:

1. Add a snippet to `lib/eval-snippets.ts`:
   ```typescript
   export const EVAL_MYCMP_OPTOUT = "window.MyCMP && window.MyCMP.rejectAll()";
   ```
2. Reference it in the rule JSON:
   ```json
   { "eval": "EVAL_MYCMP_OPTOUT" }
   ```
3. Snippets run in the page's main world. They must return a truthy value on success.
4. Eval is a last resort — prefer DOM-based steps when possible.

### Cosmetic rule breakage fixes

When using `"cosmetic": true`, the CMP may lock scrolling or add overlays. Add fixes
AFTER the `hide` step, marked `"optional": true`:

| Problem | Fix |
|---------|-----|
| Scroll lock via CSS class (`no-scroll`, `modal-open`) | `{ "removeClass": "no-scroll", "selector": "body", "optional": true }` |
| Scroll lock via inline style | `{ "addStyle": "overflow: auto !important", "selector": "body", "optional": true }` |
| Overlay blocking clicks | `{ "hide": "#overlay", "optional": true }` |
| Body position lock (`position: fixed`) | `{ "setStyle": "", "selector": "body", "optional": true }` |

Using `removeClass`, `setStyle`, or `addStyle` requires `"minimumRuleStepVersion": 2`.

## Examples

These are real rules from the codebase. Use them as templates.

### Two-click: manage then save (site-specific)

From `rules/autoconsent/canyon-com.json`:
```json
{
  "name": "canyon.com",
  "runContext": {
    "urlPattern": "^https://www\\.canyon\\.com/"
  },
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

### Multi-step: manage, uncheck toggles, save (site-specific)

From `rules/autoconsent/twitch.json`:
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

### Generic CMP rule with conditional + eval fallback

From `rules/autoconsent/didomi.json`:
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

Note: no `runContext.urlPattern` — this rule applies across all sites using Didomi.

### Cosmetic rule

From `rules/autoconsent/ally.json`:
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

## Step 7: Create the Test Spec

Create `tests/<name>.spec.ts`:

```typescript
import generateCMPTests from '../playwright/runner';

generateCMPTests('<name>', [
    'https://example.com/',
    'https://another-example.com/',
]);
```

Options:
- `skipRegions: ['US']` — skip test in certain regions
- `onlyRegions: ['US']` — only run in certain regions
- `testOptIn: true` — also test the opt-in flow
- `testSelfTest: false` — skip the self-test check

For CMP rules, include multiple test URLs from different sites that use the CMP. Use
`data/coverage.json` to find example sites.

## Step 8: Test and Verify

1. **Build rules** (required before testing):
   ```bash
   npm run build-rules
   ```

2. **Validate the rule schema:**
   ```bash
   npm run rule-syntax-check
   ```

3. **Check in a browser:** Load the site with the extension, confirm:
   - Popup is handled (dismissed or hidden)
   - Page scrolls normally
   - Interactive elements (buttons, links, forms) still work
   - `prehideSelectors` don't hide non-popup content

4. **Run the Playwright test:**
   ```bash
   npx playwright test tests/<name>.spec.ts
   ```

For CMP rules, test on multiple sites that use the CMP to verify the rule works
broadly, not just on the one site you developed against.
