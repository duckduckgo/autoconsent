import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_roc-nijmegen.nl_8vg', ['https://www.roc-nijmegen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
