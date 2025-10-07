import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_my.numworks.com_ljm', ['https://my.numworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
