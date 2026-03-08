import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_charity.ebay.co.uk_trw', ['https://charity.ebay.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
