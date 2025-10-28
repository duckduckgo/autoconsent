import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pharmaciepolygone.com_lgq', ['https://www.pharmaciepolygone.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
