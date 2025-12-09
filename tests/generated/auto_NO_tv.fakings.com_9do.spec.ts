import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tv.fakings.com_9do', ['https://tv.fakings.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
