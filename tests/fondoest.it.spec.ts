import generateCMPTests from '../playwright/runner';

// The site reloads the page after a consent choice, so the self-test cannot run.
generateCMPTests('fondoest.it', ['https://fondoest.it/'], {
    testSelfTest: false,
});
