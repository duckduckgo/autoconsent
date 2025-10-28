import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_securite-sociale.fr_334', ['https://www.securite-sociale.fr/accueil'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
