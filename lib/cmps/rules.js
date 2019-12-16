/* eslint-disable quote-props,quotes,comma-dangle,object-curly-spacing */
export default [{
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
    { "click": "#w0-w2 > button" },
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
    { "click": "#w0-w2 > button" }
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
    { "click": ".didomi-components-button:first-child", optional: true },
    { "click": ".didomi-components-radio button:first-child", "all": true},
    { "click": ".didomi-consent-popup-actions button" }
  ],
  "optIn": [
    { "click": ".didomi-learn-more-button", optional: true },
    { "click": ".didomi-components-radio button:nth-child(2)", "all": true},
    { "click": ".didomi-consent-popup-actions button" }
  ],
  "openCmp": [{ "eval": "Didomi.preferences.show()" }],
  "test": [{ "eval": "Didomi.getUserConsentStatusForAll().purposes.enabled.length === 0" }],
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
  "test": [
    { "eval": "__cmp(\'getVendorConsents\', undefined, r => window.__rcsResult = r) || true"},
    { "wait": 500 },
    { "eval": "Object.values(window.__rcsResult.vendorConsents).every(c => !c)"},
  ],
}, {
  "name": "2dehands",
  "detectCmp": [{ "exists": ".gdpr-notification" }],
  "detectPopup": [{ "exists": ".gdpr-notification"}],
  "optOut": [
    { "click": ".cookie-message-desktop > a" },
    { "waitFor": ".consent-purpose-checkbox[checked]" },
    { "click": ".consent-purpose-checkbox[checked]", "all": true },
    { "click": ".consent-submit-button" }
  ],
  "optIn": [
    { "click": ".ui-button-primary" },
  ],
}, {
  "name": "asus",
  "detectCmp": [{ "exists": "#cookie-policy-info" }],
  "detectPopup": [{ "visible": "#cookie-policy-info" }],
  "optIn": [{ "click": ".btn-read-ck" }],
  "optOut": [
    { "click": ".btn-setting" },
    { "click": ".btn-save"},
  ],
}, {
  "name": "Wikia",
  "detectCmp": [{ "exists": "div[data-tracking-opt-in-overlay=\"true\"]"}],
  "detectPopup": [{ "exists": "button[data-tracking-opt-in-learn-more=\"true\"],div[data-tracking-opt-in-learn-more=\"true\"]"}],
  "optIn": [
    { "click": "button[data-tracking-opt-in-learn-more=\"true\"],div[data-tracking-opt-in-learn-more=\"true\"]"},
    { "click": "button[data-tracking-opt-in-save=\"true\"],div[data-tracking-opt-in-save=\"true\"]"}
  ],
  "optOut": [
    { "click": "button[data-tracking-opt-in-learn-more=\"true\"],div[data-tracking-opt-in-learn-more=\"true\"]"},
    { "waitFor": "input[id^=\"switch_\"]", wait: 500 },
    { "click": "input[id^=\"switch_\"]:checked" },
    { "click": "input[id^=\"switch_\"]:checked" },
    { "click": "input[id^=\"switch_\"]:checked" },
    { "click": "input[id^=\"switch_\"]:checked" },
    { "click": "input[id^=\"switch_\"]:checked" },
    { "click": "button[data-tracking-opt-in-save=\"true\"],div[data-tracking-opt-in-save=\"true\"]"}
  ],
  "test": [
    { "eval": "__cmp(\'getVendorConsents\', undefined, r => window.__rcsResult = r) || true"},
    { "wait": 500 },
    { "eval": "Object.values(window.__rcsResult.purposeConsents).every(c => !c)"},
  ]
}, {
  name: 'faktor.io',
  detectCmp: [{ exists: '#cmp-faktor-io' }],
  frame: 'https://cw.choice.faktor.io/',
  detectPopup: [{ exists: 'body', frame: true }],
  optOut: [
    { click: '#privacySettingsButton', frame: true },
    { wait: 100 },
    { click: '.mat-slide-toggle-input:checked', frame: true, all: true },
    { wait: 100 },
    { click: '#exitButton', frame: true },
  ],
  optIn: [
    { click: '#acceptAll', frame: true },
  ],
}, {
  name: 'Sirdata',
  detectCmp: [{ exists: 'div[class^="sd-cmp-"'}],
  detectPopup: [{ visible: '.sd-cmp-3HtX8,.sd-cmp-1Og94'}],
  optIn: [{ click: '.sd-cmp-ieaP1' }],
  optOut: [
    { click: '.sd-cmp-1Q99t' },
    { click: '.sd-cmp-2DJbe' },
    { click: '.sd-cmp-2F7Cs' },
  ]
}, {
  name: 'w18lara',
  detectCmp: [{ exists: '#w18lara_tgplugin_consent' }],
  detectPopup: [{ visible: '#w18lara_tgplugin_consent' }],
  optOut: [
    { click: '.w18lara_tgplugin_consent_consentlink' },
    { click: '.w18lara_tgplugin_consent_toolcheck_check:checked', all: true },
    { click: '.w18lara_tgplugin_consent_contentfooterbutton' },
  ],
  optIn: [
    { click: '.w18lara_tgplugin_consent_generalconsentbutton' },
  ],
}, {
  name: 'Entrepreneur.com',
  detectCmp: [{ exists: 'form#cookiepolicyconsent' }],
  detectPopup: [{ visible: 'form#cookiepolicyconsent' }],
  optIn: [
    { click: '#cookieConsent' },
    { click: '#cookie-consent-ok' },
  ],
  optOut: [
    { click: '.btn-flat' },
  ]
}, {
  name: 'Admiral',
  detectCmp: [{ exists: '._4jQbdwtL-1-' }],
  detectPopup: [{ visible: '._4jQbdwtL-1-' }],
  optIn: [
    { click: '._4CT8xzMH-1- :nth-of-type(2)' },
  ],
  optOut: [
    { click: '._4CT8xzMH-1- :nth-of-type(1)' },
    { click: '._8aLmoYax-1-', optional: true, wait: 100 },
    { click: '.b3uqphfm-1-:nth-of-type(2)'},
    { click: '._8aLmoYax-1-', optional: true, wait: 100 },
    { click: '.b3uqphfm-1-:nth-of-type(3)'},
    { click: '._8aLmoYax-1-', optional: true, wait: 100 },
    { click: '.b3uqphfm-1-:nth-of-type(4)'},
    { click: '._8aLmoYax-1-', optional: true, wait: 100 },
    { click: '.b3uqphfm-1-:nth-of-type(5)'},
    { click: '._8aLmoYax-1-', optional: true, wait: 100 },
    { click: '._2LyvGTsJ-1- > ._6NeLSgRP-1-' },
  ]
}, {
  name: 'Termly',
  detectCmp: [{ exists: 'section[class^="termly-consent-banner-termly-banner-"]' }],
  detectPopup: [{ visible: 'section[class^="termly-consent-banner-termly-banner-"]' }],
  optIn: [
    { click: 'a[class^="termly-consent-banner-preference-"]', wait: 400 },
    { click: 'input[class^="termly-switch-checkbox-"]:not(:checked)', all: true },
    { click: '[class^="termly-consent-banner-footer-"] > button:first-of-type' },
  ],
  optOut: [
    { click: 'a[class^="termly-consent-banner-preference-"]', wait: 400 },
    { click: 'input[class^="termly-switch-checkbox-"]:checked', all: true, optional: true },
    { click: '[class^="termly-consent-banner-footer-"] > button:first-of-type' },
  ],
}, {
  name: 'Civic',
  detectCmp: [{ exists: 'section#ccc'}],
  detectPopup: [{ visible: '.ccc-notify-buttons,#cookie-control-modal'}],
  optIn: [
    { click: '.ccc-notify-buttons > button:nth-of-type(2),.js-toggle-cookie-control' },
    { waitFor: '#ccc-content' },
    { click: 'input.checkbox-toggle-input:not(:checked)', all: true, optional: true },
    { click: '#ccc-close' },
  ],
  optOut: [
    { click: '.ccc-notify-buttons > button:nth-of-type(2),.js-toggle-cookie-control' },
    { waitFor: '#ccc-content' },
    { click: 'input.checkbox-toggle-input:checked', all: true, optional: true },
    { click: '#ccc-close' },
  ]
}, {
  name: 'Sourcepoint',
  detectCmp: [{ visible: 'div[id^="sp_message_panel_"' }],
  detectPopup: [{ visible: 'div[id^="sp_message_panel_"' }],
  frame: 'https://pm.sourcepoint.mgr.consensu.org',
  optOut: [
    { eval: 'cipheredClassName = _sp_.msg.getMorphedClassName("sp_choice_type_12");var el = document.getElementsByClassName(cipheredClassName)[0];el.click();', optional: true },
    { click: '.switch-bg.on:not(#strictly-necessary-cookies)', all: true, frame: true, optional: true, wait: 1000 },
    { click: '#tab-saveandexit', frame: true },
  ],
  optIn: [
    { click: 'span[class^="sp_pm_link"' },
    { click: '.switch-bg:not(.on)', all: true, frame: true },
    { click: '#tab-saveandexit', frame: true },
  ]
}, {
  name: 'Clarip',
  detectCmp: [{ eval: 'typeof window.claripCookieManagerLink === "string"'}],
  detectPopup: [{ visible: '.cookie-consent-banner-content' }],
  frame: 'https://cdn.clarip.com/endurance/cookieconsent/index.html',
  optOut: [
    { 'eval': 'showModal(document.querySelector(".clarip-cookie-manager")) || true'},
    { 'click': '#opt-out-all', frame: true },
    { 'click': '#save-cookie-options', frame: true },
  ],
  optIn: [
    { 'click': '#cookie-cta' },
  ]
}, {
  name: 'Cevent',
  detectCmp: [{ exists: '.cvent-cookie-disclaimer' }],
  detectPopup: [{ visible: '.cookie-disclaimer-accept' }],
  optOut: [
    { 'click': '.cookie-disclaimer-decline' },
  ],
  optIn: [
    { 'click': '.cookie-disclaimer-accept' },
  ]
}, {
  name: 'InternetBrands',
  detectCmp: [{ exists: '.ibeugdpr-banner' }],
  detectPopup: [{ exists: 'body.ibeugdpr-disabled' }],
  optOut: [
    { eval: 'document.querySelectorAll(".ibeugdpr-disabled").forEach(e => e.classList.remove("ibeugdpr-disabled")) || true' },
    { hide: ['.ibeugdpr-banner', '.ibeugdpr-overlay'] },
  ],
  optIn: [
    { click: '.ibeugdpr-consent-button' },
  ]
}, {
  name: 'Drupal',
  detectCmp: [{ exists: '#drupalorg-crosssite-gdpr' }],
  detectPopup: [{ visible: '#drupalorg-crosssite-gdpr' }],
  optOut: [{ click: '.no' }],
  optIn: [{ click: '.yes' }]
}];
