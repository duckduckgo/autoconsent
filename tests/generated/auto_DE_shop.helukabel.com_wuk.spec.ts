import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.helukabel.com_wuk', ['https://shop.helukabel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
