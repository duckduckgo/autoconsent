import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ut-capitole.fr_bht', ['https://www.ut-capitole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
