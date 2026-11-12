import generateCMPTests from '../playwright/runner';

generateCMPTests('gla.ac.uk', ['https://www.gla.ac.uk/'], {
    // the site reloads the page after saving choices, so the self-test runs in a fresh document
    testSelfTest: false,
});
