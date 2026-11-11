import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', [
    'https://publichealth.jhu.edu/',
    'https://bibliotheek.be/',
    'https://www.governo.it/',
    'https://www.audirsclub.it/',
    'https://www.wayf.dk/',
]);
