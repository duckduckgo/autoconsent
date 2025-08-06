import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_thueringen.info_xf2', ['https://www.thueringen.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
