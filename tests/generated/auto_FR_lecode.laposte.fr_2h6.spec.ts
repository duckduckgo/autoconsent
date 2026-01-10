import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lecode.laposte.fr_2h6', ['https://lecode.laposte.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
