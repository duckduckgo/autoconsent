import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lidentitenumerique.laposte.fr_8cy', ['https://lidentitenumerique.laposte.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
