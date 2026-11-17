import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiesjsr', [
    'https://www.aepd.es/',
    'https://maths.org/',
    'https://www.csir.co.za/',
    'https://www.drive.gr/',
    'https://www.sralab.org/',
]);
