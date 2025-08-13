import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denboschregion.nl_rve', ['https://www.denboschregion.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
