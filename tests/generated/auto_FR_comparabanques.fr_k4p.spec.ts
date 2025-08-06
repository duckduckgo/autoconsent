import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comparabanques.fr_k4p', ['https://www.comparabanques.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
