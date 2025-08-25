import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_camping-car-plus.com_0g7', ['https://www.camping-car-plus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
