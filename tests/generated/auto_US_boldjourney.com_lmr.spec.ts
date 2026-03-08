import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_boldjourney.com_lmr', ['https://boldjourney.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
