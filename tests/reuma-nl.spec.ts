import generateCMPTests from '../playwright/runner';

// saving the cookie preferences reloads the page, so the self-test never runs
generateCMPTests('reuma.nl', ['https://reuma.nl/'], {
    testSelfTest: false,
});
