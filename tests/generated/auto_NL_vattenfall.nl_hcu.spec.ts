import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vattenfall.nl_hcu', ['https://www.vattenfall.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
