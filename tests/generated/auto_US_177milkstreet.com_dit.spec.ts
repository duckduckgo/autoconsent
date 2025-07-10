import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_177milkstreet.com_dit', ['https://www.177milkstreet.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
