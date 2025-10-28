import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_holzweileroslo.com_k7g', ['https://holzweileroslo.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
