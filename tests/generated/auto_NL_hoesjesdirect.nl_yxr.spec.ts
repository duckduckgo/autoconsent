import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hoesjesdirect.nl_yxr', ['https://www.hoesjesdirect.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
