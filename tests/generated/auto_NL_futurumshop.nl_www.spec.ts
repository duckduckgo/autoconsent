import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_futurumshop.nl_www', ['https://www.futurumshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
