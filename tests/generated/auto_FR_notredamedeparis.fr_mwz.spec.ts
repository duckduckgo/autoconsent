import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_notredamedeparis.fr_mwz', ['https://www.notredamedeparis.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
