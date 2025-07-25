import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denboschregion.nl_hur', ['https://www.denboschregion.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
