import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_shop.magic-x.ch_pbx', ['https://shop.magic-x.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
