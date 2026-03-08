import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cornellpubs.com_mx7', ['https://cornellpubs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
