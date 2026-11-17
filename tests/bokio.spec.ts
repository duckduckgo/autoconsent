import generateCMPTests from '../playwright/runner';

// the page reloads after saving, so the self-test result is lost
generateCMPTests('bokio', ['https://www.bokio.se/', 'https://www.bokio.co.uk/'], {
    testSelfTest: false,
});
