import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_quelleheurequellechaine.fr_ptj', ['https://quelleheurequellechaine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
