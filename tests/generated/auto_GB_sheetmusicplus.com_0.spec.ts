import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sheetmusicplus.com_0', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
