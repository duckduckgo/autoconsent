import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sheetmusicplus.com_6g4', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
