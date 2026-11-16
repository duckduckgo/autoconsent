import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', ['https://publichealth.jhu.edu/', 'https://bibliotheek.be/', 'https://www.oxy.edu/']);

// Category banners without a save-preferences button: opting out saves only the required categories, so the cookie test fails
generateCMPTests('eu-cookie-compliance-banner', ['https://www1.aade.gr/', 'https://www.goruma.de/', 'https://www.uth.gr/'], {
    testSelfTest: false,
});
