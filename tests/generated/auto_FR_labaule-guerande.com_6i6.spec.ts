import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labaule-guerande.com_6i6', ['https://www.labaule-guerande.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
