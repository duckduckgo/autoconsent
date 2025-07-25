import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fontis-shop.ch_an2', ['https://www.fontis-shop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
