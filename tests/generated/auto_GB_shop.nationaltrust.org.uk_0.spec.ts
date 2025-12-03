import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shop.nationaltrust.org.uk_0', ['https://shop.nationaltrust.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
