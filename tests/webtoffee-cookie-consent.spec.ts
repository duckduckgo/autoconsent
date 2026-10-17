import generateCMPTests from '../playwright/runner';

generateCMPTests('webtoffee-cookie-consent', [
    'https://www.inpa.gov.it/',
    'https://www.valeo.com/',
    'https://www.etsi.org/',
    // no reject button: opt out via the preference center
    'https://www.interac.ca/',
    'https://www.citiprogram.org/',
]);

generateCMPTests('webtoffee-cookie-consent', ['https://www.webtoffee.com/'], {
    skipRegions: ['US'],
});
