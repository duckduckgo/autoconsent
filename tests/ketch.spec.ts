import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'ketch',
    [
        'https://www.rover.com/nl/',
        'https://purple.com/',
        'https://www.ncsasports.org/',
        'https://www.pret.co.uk/en-GB',
        'https://www.greatpetcare.com/',
        'https://www.smartsheet.com/',
        'https://www.ketch.com/',
        'https://www.forbes.com/',
        'https://yumearth.com/products/variety-pack-30ct',
        // Disclosure-only banner variant (US/CCPA): the standard banner ships with
        // a single acknowledge button (e.g. "I understand"/"Learn more") and no
        // reject option — consent is decided by Ketch's jurisdiction defaults.
        'https://shift.com/state-of-browsing/',
        'https://www.altec.com/',
        'https://www.akro-mils.com/',
        'https://www.ascensus.com/',
        // Banner with "Manage Cookie Settings" + "Accept All Cookies" only (no
        // direct reject); preferences modal has per-purpose toggles and a
        // "Save Settings" button but no "Reject All".
        'https://my.equifax.ca/login',
        'https://www.pbs.org/newshour/economy/tomatoes-become-latest-symbol-of-americas-affordability-squeeze',
    ],
    {
        onlyRegions: ['US', 'DE'],
    },
);
