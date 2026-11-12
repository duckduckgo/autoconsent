import generateCMPTests from '../playwright/runner';

generateCMPTests('code3-cookies-consent', [
    'https://www.ordrepsy.qc.ca/',
    'https://code3.ca/',
    'https://aufildutemps.quebec/',
    'https://chop.raic.ca/',
]);
