import generateCMPTests from '../playwright/runner';

// saving preferences reloads the page when analytics was on by default (US), which interrupts the self-test
generateCMPTests('therealest', ['https://mls.therealest.com/', 'https://therealest.com/'], {
    testSelfTest: false,
});
