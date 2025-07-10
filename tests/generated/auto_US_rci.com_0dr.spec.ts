import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_rci.com_0dr', ['https://www.rci.com/pre-rci/us/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
