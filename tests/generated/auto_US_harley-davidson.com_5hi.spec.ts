import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_harley-davidson.com_5hi', ['https://www.harley-davidson.com/us/en/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
