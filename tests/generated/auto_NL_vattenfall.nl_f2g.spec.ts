import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vattenfall.nl_f2g', ['https://www.vattenfall.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
