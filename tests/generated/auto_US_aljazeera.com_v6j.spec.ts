import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_aljazeera.com_v6j', ['https://www.aljazeera.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
