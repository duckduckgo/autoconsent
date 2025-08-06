import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rtvdrenthe.nl_ln5', ['https://www.rtvdrenthe.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
