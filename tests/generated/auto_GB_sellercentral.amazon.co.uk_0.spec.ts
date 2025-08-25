import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sellercentral.amazon.co.uk_0', ['https://sellercentral.amazon.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
