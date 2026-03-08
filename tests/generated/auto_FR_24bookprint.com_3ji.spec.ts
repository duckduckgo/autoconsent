import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_24bookprint.com_3ji', ['https://24bookprint.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
