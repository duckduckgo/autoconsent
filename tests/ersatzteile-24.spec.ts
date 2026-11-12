import generateCMPTests from '../playwright/runner';

// saving the choice reloads the page before the self-test runs
generateCMPTests('ersatzteile-24', ['https://www.ersatzteile-24.com/'], {
    testSelfTest: false,
});
