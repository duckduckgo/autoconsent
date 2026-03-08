import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cgi5.ebay.co.uk_knz', ['https://cgi5.ebay.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
