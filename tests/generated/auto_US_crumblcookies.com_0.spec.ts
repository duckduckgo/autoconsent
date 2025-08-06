import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_crumblcookies.com_0', ['https://crumblcookies.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
