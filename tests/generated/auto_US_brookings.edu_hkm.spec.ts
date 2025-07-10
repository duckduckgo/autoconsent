import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_brookings.edu_hkm', ['https://www.brookings.edu/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
