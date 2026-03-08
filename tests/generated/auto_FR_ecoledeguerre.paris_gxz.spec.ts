import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecoledeguerre.paris_gxz', ['https://ecoledeguerre.paris/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
