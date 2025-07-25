import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hoesjesdirect.nl_cr5', ['https://www.hoesjesdirect.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
