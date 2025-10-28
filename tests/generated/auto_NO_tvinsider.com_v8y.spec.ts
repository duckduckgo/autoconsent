import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tvinsider.com_v8y', ['https://www.tvinsider.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
