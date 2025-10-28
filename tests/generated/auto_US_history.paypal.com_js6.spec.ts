import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_history.paypal.com_js6', ['https://history.paypal.com/us/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
