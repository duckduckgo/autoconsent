import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_support.strava.com_kzz', ['https://support.strava.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
