import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lesjardinsdelavalette.com_r7e', ['https://en.lesjardinsdelavalette.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
