import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_shop.alphacool.com_xdp', ['https://shop.alphacool.com/shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
