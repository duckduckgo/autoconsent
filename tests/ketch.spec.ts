import generateCMPTests from '../playwright/runner';

generateCMPTests('ketch', [
    'https://time.com/',
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
]);
