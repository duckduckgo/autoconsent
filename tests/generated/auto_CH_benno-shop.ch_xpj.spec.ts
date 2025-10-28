import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_benno-shop.ch_xpj', ['https://www.benno-shop.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
