import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca.shop.thepwhl.com_zag', ['https://ca.shop.thepwhl.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
