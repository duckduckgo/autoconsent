import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rtvdrenthe.nl_4q7', ['https://www.rtvdrenthe.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
