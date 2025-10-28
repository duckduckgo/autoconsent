import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_toogoodtogo.com_cnw', ['https://www.toogoodtogo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
