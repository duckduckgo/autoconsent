import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_newyorkpizza.nl_0rn', ['https://www.newyorkpizza.nl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
