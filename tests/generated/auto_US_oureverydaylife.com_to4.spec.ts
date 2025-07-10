import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_oureverydaylife.com_to4', ['https://oureverydaylife.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
