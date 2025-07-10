import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_12onyourside.com_t9w', ['https://www.12onyourside.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
