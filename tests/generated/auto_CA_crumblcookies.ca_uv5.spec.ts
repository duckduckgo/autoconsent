import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_crumblcookies.ca_uv5', ['https://crumblcookies.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
