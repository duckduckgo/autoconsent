/* eslint-disable quote-props,quotes,comma-dangle,object-curly-spacing */
export default [{
  "name": "TechRadar",
  "detectCmp": [{ "url": "https://www.techradar.com"}],
  "detectPopup": [{ "exists": "#cmp-container-id"}],
  "frame": "https://consent.cmp.techradar.com/",
  "optOut": [
    { "click": "#mainMoreInfo", "frame": true, "optional": true },
    { "click": ".cmp-btn-rejectall", "frame": true },
    { "click": "#confirmLeave", "frame": true }
  ],
  "optIn": [
    { "click": "#mainMoreInfo", "frame": true, "optional": true },
    { "click": ".cmp-btn-acceptall", "frame": true },
    { "click": ".cmp-btn-acceptall", "frame": true }
  ],
  "openCmp": [
    { "eval": "window.__cmp(\"renderConsents\") || true" },
    { "waitFor": "#cmp-ui-iframe" },
    { "wait": 500 }
  ]
}, {
  "name": "Ebay",
  "detectCmp": [{ "url": "https://www.ebay.de" }],
  "detectPopup": [{ "waitFor": "#gdpr-banner", "timeout": 5000 }],
  "optOut": [
    { "click": ".gdpr-banner__text > a:nth-child(2)", "optional": true },
    { "waitForThenClick": "#pl-4 > label > div.knob.selected", "optional": true },
    { "click": "#pl-5 > label > div.knob.selected", "optional": true },
    { "click": "#pl-google > label > div.knob.selected", "optional": true },
    { "click": "#pl-1 > label > div.knob.selected", "optional": true },
    { "click": "#pl-3 > label > div.knob.selected", "optional": true },
    { "click": "#pl-2 > label > div.knob.selected", "optional": true },
    { "wait": 500 },
    { "click": "#w0-w0 > button" },
  ],
  "optIn": [
    { "click": ".gdpr-banner__text > a:nth-child(2)", "optional": true },
    { "waitForThenClick": "#pl-4 > label > div.knob:not(.selected)", "optional": true },
    { "click": "#pl-5 > label > div.knob:not(.selected)", "optional": true },
    { "click": "#pl-google > label > div.knob:not(.selected)", "optional": true },
    { "click": "#pl-1 > label > div.knob:not(.selected)", "optional": true },
    { "click": "#pl-3 > label > div.knob:not(.selected)", "optional": true },
    { "click": "#pl-2 > label > div.knob:not(.selected)", "optional": true },
    { "wait": 500 },
    { "click": "#w0-w0 > button" }
  ],
  "openCmp": [{
    "goto": "https://www.ebay.de/gdpr"
  }, {
    "wait": 1000,
  }]
}, {
  "name": "Didomi",
  "detectCmp": [{ "exists": "#didomi-host" }],
  "detectPopup": [{ "exists": "#didomi-popup" }, { "exists": "#didomi-notice" }],
  "optOut": [
    { "click": ".didomi-learn-more-button", optional: true },
    { "click": ".didomi-components-radio button:first-child", "all": true},
    { "click": ".didomi-consent-popup-actions button" }
  ],
  "optIn": [
    { "click": ".didomi-learn-more-button", optional: true },
    { "click": ".didomi-components-radio button:nth-child(2)", "all": true},
    { "click": ".didomi-consent-popup-actions button" }
  ],
  "openCmp": [{ "eval": "Didomi.preferences.show()" }]
}, {
  "name": "conversant",
  "detectCmp": [{ "eval": "window.cmpConfig && window.cmpConfig.methods && typeof window.cmpConfig.methods.summon === 'function'"}],
  "detectPopup": [{ "exists": "#gdpr-modal-landing-body"}],
  "optOut": [
    { "click": "#gdpr-modal-learn-more" },
    { "click": "#gdpr-modal-all-purpose-opt-out"},
    { "click": "#gdpr-modal-collapse-vendor .gdpr-modal-shrink" },
    { "click": ".gdpr-modal-button-continue" }
  ],
  "optIn": [
    { "click": ".gdpr-modal-button-continue" }
  ],
  "openCmp": [{ "eval": "cmpConfig.methods.summon()" }],
}];
