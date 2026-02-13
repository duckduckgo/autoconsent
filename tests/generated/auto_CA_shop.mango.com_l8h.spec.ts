import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_shop.mango.com_l8h', ['https://shop.mango.com/gb/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
