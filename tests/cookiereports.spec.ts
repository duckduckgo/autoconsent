import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiereports', ['https://www.practicalmoneyskills.com/en', 'https://usa.visa.com/']);

// These sites navigate after the opt-out click, which re-injects the content script,
// so the self test runs in an instance that no longer holds the detected CMP.
generateCMPTests('cookiereports', ['https://www.authorize.net/', 'https://www.visaacceptance.com/'], {
    testSelfTest: false,
});
