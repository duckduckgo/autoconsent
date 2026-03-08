import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_autoviatest.com_zq3', ['https://autoviatest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
