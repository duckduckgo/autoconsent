import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.francecasse.fr_wgc', ['https://boutique.francecasse.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
