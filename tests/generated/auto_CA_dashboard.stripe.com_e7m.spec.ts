import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dashboard.stripe.com_e7m', ['https://dashboard.stripe.com/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
