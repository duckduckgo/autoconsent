import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_aljazeera.com_fpm', ['https://www.aljazeera.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
