import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thefreshmarket.com_dmr', ['https://www.thefreshmarket.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
