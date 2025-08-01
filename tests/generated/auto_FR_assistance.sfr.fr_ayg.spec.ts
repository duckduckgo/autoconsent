import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assistance.sfr.fr_ayg', ['https://assistance.sfr.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
