import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sheetmusicgo.com_jbz', ['https://www.sheetmusicgo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
