import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jeld-wen.com_0', ['https://www.jeld-wen.com/en-us'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
