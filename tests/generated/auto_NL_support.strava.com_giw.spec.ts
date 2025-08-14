import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_support.strava.com_giw', ['https://support.strava.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
