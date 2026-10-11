import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', [
    'https://publichealth.jhu.edu/',
    'https://bibliotheek.be/',
    'https://www.ciee.org/go-abroad/high-school-study-abroad/summer/programs/france/rennes/french-language-culture',
    'https://tulane.edu/',
    'https://ucalgary.ca/',
    'https://www.ucr.edu/',
]);
