import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_airfryeronline.nl_doh', ['https://airfryeronline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
