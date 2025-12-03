import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_shop.ahw-shop.de_92l', ['https://shop.ahw-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
