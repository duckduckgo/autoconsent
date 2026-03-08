import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_banyansoftware.com_evk', ['https://banyansoftware.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
