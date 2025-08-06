import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aide.laposte.fr_wpe', ['https://aide.laposte.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
