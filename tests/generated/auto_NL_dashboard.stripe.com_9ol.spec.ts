import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dashboard.stripe.com_9ol', ['https://dashboard.stripe.com/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
