import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_diskinternals.com_m5y', ['https://www.diskinternals.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
