import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sheetmusicplus.com_fco', ['https://www.sheetmusicplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
