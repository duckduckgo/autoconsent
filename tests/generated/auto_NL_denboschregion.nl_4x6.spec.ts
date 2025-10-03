import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denboschregion.nl_4x6', ['https://www.denboschregion.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
