import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cn23.laposte.fr_9e4', ['https://cn23.laposte.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
