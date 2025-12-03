import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.helukabel.com_jt0', ['https://shop.helukabel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
