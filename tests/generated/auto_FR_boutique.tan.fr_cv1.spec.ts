import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.tan.fr_cv1', ['https://boutique.tan.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
