import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dashboard.stripe.com_v6p', ['https://dashboard.stripe.com/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
