import generateCMPTests from '../playwright/runner';

// the site reloads the page after a consent choice, so the self-test runs on a fresh page
generateCMPTests('eventfrog', ['https://eventfrog.ch/', 'https://eventfrog.de/', 'https://eventfrog.at/'], {
    testSelfTest: false,
});
