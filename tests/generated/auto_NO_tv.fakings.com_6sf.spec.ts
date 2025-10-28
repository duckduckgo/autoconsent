import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tv.fakings.com_6sf', ['https://tv.fakings.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
