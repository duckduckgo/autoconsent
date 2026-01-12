import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sheetmusicplus.com_non', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
