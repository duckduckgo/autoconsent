import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_support.strava.com_471', ['https://support.strava.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
