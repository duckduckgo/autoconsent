import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_brookings.edu_wlp', ['https://www.brookings.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
