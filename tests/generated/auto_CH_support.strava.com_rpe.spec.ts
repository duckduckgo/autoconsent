import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_support.strava.com_rpe', ['https://support.strava.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
