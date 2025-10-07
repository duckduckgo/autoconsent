import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denboschregion.nl_bcw', ['https://www.denboschregion.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
