import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_quelmatelas.fr_os2', ['https://www.quelmatelas.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
