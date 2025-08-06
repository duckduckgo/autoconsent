import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hoesjesdirect.nl_xpt', ['https://www.hoesjesdirect.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
