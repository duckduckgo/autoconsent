import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_support.lenovo.com_m49', ['https://support.lenovo.com/us/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
