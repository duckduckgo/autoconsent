import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_advancedtactical.com_i0a', ['https://advancedtactical.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
