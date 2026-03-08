import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_activitymessenger.com_kwn', ['https://activitymessenger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
