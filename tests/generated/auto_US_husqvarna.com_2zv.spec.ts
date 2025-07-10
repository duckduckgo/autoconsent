import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_husqvarna.com_2zv', ['https://www.husqvarna.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
