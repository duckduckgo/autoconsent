import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_paypal.com_6sf', ['https://www.paypal.com/de/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
