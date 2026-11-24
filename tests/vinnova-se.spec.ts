import generateCMPTests from '../playwright/runner';

// saving the choice reloads the page before the self-test can run
generateCMPTests('vinnova-se', ['https://www.vinnova.se/', 'https://www.vinnova.se/en/'], {
    testSelfTest: false,
});
