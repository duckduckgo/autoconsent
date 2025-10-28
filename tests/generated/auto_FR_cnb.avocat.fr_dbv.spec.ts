import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cnb.avocat.fr_dbv', ['https://www.cnb.avocat.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
