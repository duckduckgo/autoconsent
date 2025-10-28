import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_armureriedelabourse.com_nh2', ['https://www.armureriedelabourse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
