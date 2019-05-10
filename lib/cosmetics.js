
export async function getCosmeticsForSite(site) {
  if (site.endsWith('reddit.com')) {
    return [
      '.XPromoPopup',
    ]
  }
  return [
    'div[class^="app_gdpr-"]',
  ];
}

export const STATIC_COSMETICS = [
  '#disclaimer-cookies',
  '.cc-banner',
  '.cc_banner',
  '#js-gdpr-consent-banner',
  '#_evidon-barrier-wrapper',
  '#_evidon_banner',
  '#cookie-consent',
  '.cookie-modal',
  '.butterBar--privacy',
  '#cookie_box',
  '.cookie-box',
  '.js-cookie-banner',
  '.m-basic-cookie-refresh',
  '.cookie-notice',
  '#iubenda-cs-banner',
  'div[data-veloute=\"cookie-disclaimer\"]',
  '[aria-label=\"cookieconsent\"]',
  'amp-user-notification',
  '#cookie_consent',
  '#cookieHint',
  '#consentContainer',
  '#Banner_cookie_0',
  '#cookie-msg',
  '#cookiesdirective',
  '#__tealiumGDPRecModal',
  '#cookiebanner',
  '_evh-ric',
  '.trustarc-banner',
  '.truste-banner',
];
