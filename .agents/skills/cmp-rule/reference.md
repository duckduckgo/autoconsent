# CMP Rule Reference

## Selector Best Practices

Prefer selectors stable across builds and locales:

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

Priority: data attributes > stable IDs > class substrings (`[class*="..."]`) >
structural CSS > XPath (last resort).

## Cosmetic Breakage Fixes

When using `"cosmetic": true`, the CMP may lock scrolling or add overlays. Add fixes
AFTER the `hide` step, marked `"optional": true`:

| Problem | Fix |
|---------|-----|
| Scroll lock via CSS class (`no-scroll`, `modal-open`) | `{ "removeClass": "no-scroll", "selector": "body", "optional": true }` |
| Scroll lock via inline style | `{ "addStyle": "overflow: auto !important", "selector": "body", "optional": true }` |
| Overlay blocking clicks | `{ "hide": "#overlay", "optional": true }` |
| Body position lock (`position: fixed`) | `{ "setStyle": "", "selector": "body", "optional": true }` |

Using `removeClass`, `setStyle`, or `addStyle` requires `"minimumRuleStepVersion": 2`.

## Iframes and Shadow DOM

### Chained selectors

Array selectors pierce shadow DOM and same-origin iframes automatically. Each selector
in the array scopes into the previous match's `.shadowRoot` or `.contentDocument`:

```json
["#shadow-host", "button.reject"]
["#cmp-container iframe", ".opt-out-btn"]
```

Single-string selectors cannot pierce — use arrays whenever the target is inside a
shadow root or iframe.

### Cross-origin iframes

Chained selectors cannot pierce cross-origin iframes. **Check early:** if the
iframe `src` domain differs from the page domain, it's cross-origin.

Create a separate frame-only rule that runs inside the iframe:
```json
{
  "name": "example-cmp-frame",
  "runContext": { "main": false, "frame": true, "urlPattern": "^https://cmp\\.example\\.com/" },
  "detectCmp": [{ "exists": ".cmp-banner" }],
  ...
}
```

See `sourcepoint-frame.ts`, `trustarc-frame.ts` for code-based examples.

## Quick Diagnosis

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
