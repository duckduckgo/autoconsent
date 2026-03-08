import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_duurzaamwonen.amsterdam_7zp', ['https://duurzaamwonen.amsterdam/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
