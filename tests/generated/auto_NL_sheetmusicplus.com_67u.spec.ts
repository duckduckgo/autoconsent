import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sheetmusicplus.com_67u', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
