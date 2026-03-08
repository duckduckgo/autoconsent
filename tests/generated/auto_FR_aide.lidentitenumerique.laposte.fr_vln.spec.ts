import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aide.lidentitenumerique.laposte.fr_vln', ['https://aide.lidentitenumerique.laposte.fr/kb/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
