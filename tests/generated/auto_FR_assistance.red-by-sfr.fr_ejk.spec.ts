import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assistance.red-by-sfr.fr_ejk', ['https://assistance.red-by-sfr.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
