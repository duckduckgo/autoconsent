import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_braendi-shop.ch_164', ['https://www.braendi-shop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
