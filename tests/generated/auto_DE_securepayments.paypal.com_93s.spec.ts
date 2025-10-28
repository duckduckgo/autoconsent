import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_securepayments.paypal.com_93s', ['https://securepayments.paypal.com/de/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
