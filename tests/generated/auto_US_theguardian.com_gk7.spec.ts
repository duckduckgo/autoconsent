import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_theguardian.com_gk7', ['https://www.theguardian.com/us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
