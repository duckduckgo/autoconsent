import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sheetmusicplus.com_joy', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
