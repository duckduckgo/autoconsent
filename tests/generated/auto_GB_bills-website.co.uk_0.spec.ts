import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bills-website.co.uk_0', ['https://bills-website.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
