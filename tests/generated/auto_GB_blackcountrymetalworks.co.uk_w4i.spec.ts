import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blackcountrymetalworks.co.uk_w4i', ['https://www.blackcountrymetalworks.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
