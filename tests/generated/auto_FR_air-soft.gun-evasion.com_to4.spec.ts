import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_air-soft.gun-evasion.com_to4', ['https://air-soft.gun-evasion.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
