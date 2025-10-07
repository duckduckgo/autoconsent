import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sheetmusicplus.com_up5', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
