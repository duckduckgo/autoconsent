import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_itstillworks.com_pxa', ['https://itstillworks.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
