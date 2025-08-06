import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_camping-car-plus.com_ljb', ['https://www.camping-car-plus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
