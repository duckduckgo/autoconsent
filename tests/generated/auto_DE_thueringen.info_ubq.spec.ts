import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thueringen.info_ubq', ['https://www.thueringen.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
