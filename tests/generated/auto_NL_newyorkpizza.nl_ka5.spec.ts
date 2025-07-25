import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_newyorkpizza.nl_ka5', ['https://www.newyorkpizza.nl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
