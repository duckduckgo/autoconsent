import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thueringen.info_9w4', ['https://www.thueringen.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
