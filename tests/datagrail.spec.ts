import generateCMPTests from '../playwright/runner';

generateCMPTests('datagrail', [
    // dg-left, only accept_all + open_layer visible (exercises the customize + reject fallback)
    'https://konghq.com/',
    // dg-left, direct reject_all button ("Accept Essentials Only" label)
    'https://www.earnin.com/',
    // dg-left, direct reject_all with "Reject All Cookies" text
    'https://www.getmyperks.com/',
    // dg-bottom position variant; in US/CA the preference layer only has "Confirm My Choices", toggles must be unchecked first
    'https://www.fortinet.com/',
    // same preference layer without a reject button
    'https://www.aura.com/',
    // 'https://www.topps.com/', // cloudflare botwall
]);
