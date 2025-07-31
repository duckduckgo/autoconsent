import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_paypal.com_wp8', ['https://www.paypal.com/uk/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
