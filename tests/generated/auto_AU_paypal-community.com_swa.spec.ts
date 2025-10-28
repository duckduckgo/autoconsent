import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_paypal-community.com_swa', ['https://www.paypal.com/us/cshelp/personal'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
