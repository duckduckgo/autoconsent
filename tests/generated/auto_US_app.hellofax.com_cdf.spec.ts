import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_app.hellofax.com_cdf', ['https://app.hellofax.com/account/logIn'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
