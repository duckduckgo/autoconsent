import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_support.lenovo.com_0ss', ['https://support.lenovo.com/us/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
