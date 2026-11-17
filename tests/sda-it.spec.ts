import generateCMPTests from '../playwright/runner';

// the site reloads the page after the click, so the self-test cannot run
generateCMPTests('sda-it', ['https://www.sda.it/'], {
    testOptIn: true,
    testSelfTest: false,
});
