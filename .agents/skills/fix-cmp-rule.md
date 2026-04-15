# Fix CMP Rule

Step-by-step workflow for diagnosing and fixing a broken autoconsent rule.

## Step 1: Check Current State

Load the site with the autoconsent extension (`dist/addon-mv3/`), visit the site, and
check the devtools console. Take a screenshot of what you see.

If no rule matches at all ("No CMP detected"), this is a **create** task — switch to
the `create-cmp-rule` skill.

If a rule matched, the logs will show which stage succeeded or failed:

| Log message | Stage | Meaning |
|------------|-------|---------|
| `Found CMP: name` | detectCmp | CMP detection passed |
| `popupFound` | detectPopup | Popup visibility confirmed |
| `autoconsentDone` | optOut | Opt-out flow completed |
| `optOutResult: true` | optOut | Opt-out succeeded |
| `optOutResult: false` | optOut | Opt-out failed |
| `selfTestResult: true/false` | test | Self-test passed/failed |

You can also run the Playwright test to see the failure:
```bash
npx playwright test tests/<name>.spec.ts
```

## Step 2: Diagnose

### detectCmp or detectPopup failed

The popup's DOM has changed. Common causes:
- **Selectors outdated:** The CMP updated its HTML structure or class names.
- **Shadow DOM / iframe:** The popup moved into a shadow root or iframe (need array
  selectors).
- **Region-dependent:** The popup only appears in certain regions.

Inspect the live DOM to find the current selectors.

### optOut failed

An opt-out step couldn't complete. Common causes:
- **Button selector changed:** The reject button was renamed or restructured.
- **New CMP variant:** A/B test or regional variant with different UI. Add
  if/then/else fallback.
- **Race condition:** Popup loads asynchronously. Switch bare `click` to
  `waitForThenClick`, or add `{ "wait": 500 }` before the failing step.
- **Wrong button targeted:** The rule clicks a privacy policy link or close button
  instead of the actual reject button.

### selfTest (test) failed

The consent cookie format changed. Inspect `document.cookie` after manually rejecting
to find the new cookie name/value.

### Cosmetic rule — site is broken

The popup is hidden but the page is unusable (can't scroll, can't click). See
"Cosmetic breakage fixes" below.

## Step 3: Fix the Rule

### Fixing JSON rules

1. Read the existing rule to understand its flow.
2. Identify the broken step from logs or browser inspection.
3. Update the selector in **every occurrence** within the file — `detectCmp`,
   `detectPopup`, `optOut`, and `test` often share similar selectors.
4. If the popup is from a CMP provider, check if OTHER rules for the same CMP need
   the same fix:
   ```bash
   grep -rl "<old-selector>" rules/autoconsent/ rules/generated/
   ```
5. For generated rules (`rules/generated/auto_XX_domain_*.json`), find all region
   variants and apply the fix to all of them.

### Adding fallback paths

Use if/then/else for handling CMP variants (regional, A/B test, version differences):

```json
{
  "if": { "exists": "#reject-button" },
  "then": [{ "waitForThenClick": "#reject-button" }],
  "else": [{
    "if": { "exists": "#manage-cookies" },
    "then": [
      { "waitForThenClick": "#manage-cookies" },
      { "waitForThenClick": "#save-preferences" }
    ],
    "else": [{ "hide": "#cookie-banner" }]
  }]
}
```

### Cosmetic breakage fixes

When a cosmetic rule hides the popup but breaks the page:

| Problem | Fix |
|---------|-----|
| Scroll lock via CSS class (`no-scroll`, `modal-open`, `overflow-hidden`) | `{ "removeClass": "no-scroll", "selector": "body", "optional": true }` |
| Scroll lock via inline style (`overflow: hidden`) | `{ "addStyle": "overflow: auto !important", "selector": "body", "optional": true }` |
| Overlay blocking clicks (fixed-position div with high z-index) | `{ "hide": "#overlay", "optional": true }` |
| Body position lock (`position: fixed; top: -XXpx`) | `{ "setStyle": "", "selector": "body", "optional": true }` |

Add these AFTER the `hide` step. Mark as `"optional": true`. Using `removeClass`,
`setStyle`, or `addStyle` requires `"minimumRuleStepVersion": 2`.

### Fixing code-based rules

1. Read the CMP class in `lib/cmps/` and trace the failing code path.
2. Avoid hardcoded site-specific attribute values in code-based rules.
3. Add path/state detection for new CMP variants (check `location.pathname`, button
   presence, URL parameters).
4. Add fallback paths when variants may not have expected buttons.

## Step 4: Test the Fix

1. **Validate:** `npm run rule-syntax-check`
2. **Browser check:** Load the site with the extension. Confirm:
   - Popup is handled
   - Page scrolls normally
   - Interactive elements work
3. **Playwright test:** `npx playwright test tests/<name>.spec.ts`
4. **For CMP rules (not site-specific):** Test on multiple sites that use the CMP.
   Use `data/coverage.json` to find example sites, or search the test spec for URLs.

## Quick Reference

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| No CMP detected | `detectCmp` selectors outdated | Update selectors to match current DOM |
| Popup not found | Element exists but isn't visible | Check CSS visibility, timing, z-index |
| optOut failed | Click target moved or renamed | Update `optOut` selectors |
| selfTest failed | Consent cookie name/format changed | Update `test` array with new cookie |
| Popup hidden, can't scroll | CMP adds scroll lock class/style | Add `removeClass` or `addStyle` step |
| Popup hidden, overlay blocks | CMP overlay not hidden | Add extra `hide` step for overlay |
| Works in one region, fails in another | Regional CMP variant | Add if/then/else fallback |
| Works manually, fails in Playwright | Timing / race condition | Use `waitForThenClick` instead of `click` |
