import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_quaibranly.fr_r66', ['https://www.quaibranly.fr/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
