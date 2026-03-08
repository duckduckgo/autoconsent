import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aide.laposte.net_1rp', ['https://aide.laposte.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
