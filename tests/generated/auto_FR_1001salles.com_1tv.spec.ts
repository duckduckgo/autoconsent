import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_1001salles.com_1tv', ['https://www.1001salles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
