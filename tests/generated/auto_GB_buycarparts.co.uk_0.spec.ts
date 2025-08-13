import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_buycarparts.co.uk_0', ['https://www.buycarparts.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
