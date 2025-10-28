import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_planeterenault.com_1h8', ['https://www.planeterenault.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
