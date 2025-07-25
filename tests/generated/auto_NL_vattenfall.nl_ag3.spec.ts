import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vattenfall.nl_ag3', ['https://www.vattenfall.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
