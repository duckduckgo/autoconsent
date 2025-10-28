import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lestriconautes.com_sdo', ['https://www.lestriconautes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
