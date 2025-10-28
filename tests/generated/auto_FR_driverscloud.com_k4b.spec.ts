import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_driverscloud.com_k4b', ['https://www.driverscloud.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
