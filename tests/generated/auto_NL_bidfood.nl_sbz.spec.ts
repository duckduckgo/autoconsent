import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bidfood.nl_sbz', ['https://www.bidfood.nl/webshop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
