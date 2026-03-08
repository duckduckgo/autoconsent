import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.sfr.fr_r0u', ['https://boutique.sfr.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
