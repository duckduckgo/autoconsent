import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comparabanques.fr_4o4', ['https://www.comparabanques.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
