import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_futurumshop.nl_bds', ['https://www.futurumshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
