import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', [
    'https://www.mannheim.de/',
    'https://www.aa.org/',
    'https://mas.be/',
    'https://oauth2.gsis.gr/',
]);
