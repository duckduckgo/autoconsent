import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_paypal.com_tuk', ['https://www.paypal.com/us/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
