import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_newyorkpizza.nl_t3h', ['https://www.newyorkpizza.nl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
