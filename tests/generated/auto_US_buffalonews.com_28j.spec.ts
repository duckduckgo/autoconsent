import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_buffalonews.com_28j', ['https://buffalonews.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
