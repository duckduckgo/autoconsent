import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rustigenacht.nl_tdd', ['https://rustigenacht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
