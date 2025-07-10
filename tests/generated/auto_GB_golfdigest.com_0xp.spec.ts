import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_golfdigest.com_0xp', ['https://www.golfdigest.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
