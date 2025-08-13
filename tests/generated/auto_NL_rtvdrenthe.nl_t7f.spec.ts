import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rtvdrenthe.nl_t7f', ['https://www.rtvdrenthe.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
