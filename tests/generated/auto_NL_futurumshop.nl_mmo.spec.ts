import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_futurumshop.nl_mmo', ['https://www.futurumshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
