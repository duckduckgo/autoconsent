import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comparabanques.fr_gft', ['https://www.comparabanques.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
