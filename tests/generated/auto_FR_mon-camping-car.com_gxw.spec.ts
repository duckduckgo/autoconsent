import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mon-camping-car.com_gxw', ['https://www.mon-camping-car.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
