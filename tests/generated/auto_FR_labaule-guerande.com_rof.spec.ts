import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labaule-guerande.com_rof', ['https://www.labaule-guerande.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
