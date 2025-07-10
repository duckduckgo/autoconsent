import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_harley-davidson.com_e1c', ['https://www.harley-davidson.com/us/en/index.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
