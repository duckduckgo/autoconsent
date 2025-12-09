import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gutscheine.nzz.ch_lkr', ['https://gutscheine.nzz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
