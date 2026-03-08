import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.fff.fr_k17', ['https://boutique.fff.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
