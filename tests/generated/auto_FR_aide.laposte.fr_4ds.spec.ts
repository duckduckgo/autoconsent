import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aide.laposte.fr_4ds', ['https://aide.laposte.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
