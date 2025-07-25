import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_car-media.ch_cn4', ['https://www.car-media.ch/shop/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
