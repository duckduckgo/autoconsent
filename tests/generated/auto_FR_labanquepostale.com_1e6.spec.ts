import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labanquepostale.com_1e6', ['https://www.labanquepostale.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
