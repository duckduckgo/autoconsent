import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bauteil-shop.ch_dkx', ['https://bauteil-shop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
