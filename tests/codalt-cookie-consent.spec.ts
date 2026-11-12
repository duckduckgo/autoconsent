import generateCMPTests from '../playwright/runner';

// rejecting reloads the page, which interrupts the self-test
generateCMPTests('codalt-cookie-consent', ['https://cvandaag.nl/', 'https://dagaandag.com/'], {
    testSelfTest: false,
});
