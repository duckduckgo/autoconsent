import generateCMPTests from '../playwright/runner';

// saving the choice reloads the page, so the self-test never gets to run
generateCMPTests('librus', ['https://portal.librus.pl/'], {
    testSelfTest: false,
});
