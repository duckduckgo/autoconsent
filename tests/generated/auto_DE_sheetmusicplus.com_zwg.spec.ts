import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sheetmusicplus.com_zwg', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
