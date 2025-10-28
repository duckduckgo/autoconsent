import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bernaertsmusic.shop_mn4', ['https://bernaertsmusic.shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
