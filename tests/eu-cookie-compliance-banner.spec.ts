import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', [
    'https://publichealth.jhu.edu/',
    'https://bibliotheek.be/',
    // category banner whose only control is the agree button
    'https://www.bfn.de/',
    // category banner with a separate "save preferences" button
    'https://www.mcgill.ca/',
    // plain banner with a reject button
    'https://www.oxy.edu/',
]);
