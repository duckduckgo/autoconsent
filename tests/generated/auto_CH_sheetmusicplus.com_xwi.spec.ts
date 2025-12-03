import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sheetmusicplus.com_xwi', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
