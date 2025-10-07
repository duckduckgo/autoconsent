import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_my.numworks.com_5b4', ['https://my.numworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
