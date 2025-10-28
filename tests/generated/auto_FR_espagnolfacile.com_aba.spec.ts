import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espagnolfacile.com_aba', ['https://www.espagnolfacile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
