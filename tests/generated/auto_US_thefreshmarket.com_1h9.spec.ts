import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thefreshmarket.com_1h9', ['https://www.thefreshmarket.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
