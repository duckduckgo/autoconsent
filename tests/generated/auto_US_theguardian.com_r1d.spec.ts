import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_theguardian.com_r1d', ['https://www.theguardian.com/us'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
