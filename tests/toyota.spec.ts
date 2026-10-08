import generateCMPTests from '../playwright/runner';

// Saving the preferences reloads the page, so the self-test result never arrives
generateCMPTests('toyota', ['https://www.lexus.com/', 'https://www.toyota.com/'], {
    testSelfTest: false,
});
