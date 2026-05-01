# CMP Rule Examples

Real rules from the codebase. Use as templates.

## Two-click: manage then save (site-specific)

From `rules/autoconsent/canyon-com.json`:
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

## Multi-step: manage, uncheck toggles, save (site-specific)

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

## Conditional + eval fallback

From `rules/autoconsent/didomi.json` — generic CMP rule (no `runContext.urlPattern`):
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

## Cosmetic rule

From `rules/autoconsent/ally.json` — no reject button, hide-only:
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
