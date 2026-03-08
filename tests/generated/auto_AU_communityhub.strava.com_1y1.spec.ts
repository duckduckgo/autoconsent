import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_communityhub.strava.com_1y1', ['https://communityhub.strava.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
