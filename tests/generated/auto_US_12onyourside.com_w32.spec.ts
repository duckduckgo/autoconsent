import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_12onyourside.com_w32', ['https://www.12onyourside.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
