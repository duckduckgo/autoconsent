import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_red-by-sfr.fr_np1', ['https://www.red-by-sfr.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
