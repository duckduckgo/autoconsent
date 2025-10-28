import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bernaertsmusic.shop_hgh', ['https://bernaertsmusic.shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
