import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denboschregion.nl_a0k', ['https://www.denboschregion.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
