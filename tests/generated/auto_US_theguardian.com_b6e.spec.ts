import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_theguardian.com_b6e', ['https://www.theguardian.com/us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
