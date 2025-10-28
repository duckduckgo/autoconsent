import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_laboutiquedeschefs.com_z0a', ['https://www.laboutiquedeschefs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
