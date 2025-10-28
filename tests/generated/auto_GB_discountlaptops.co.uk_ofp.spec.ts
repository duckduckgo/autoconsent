import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_discountlaptops.co.uk_ofp', ['https://www.discountlaptops.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
