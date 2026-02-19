import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blutspendezurich.ch_s0f', ['https://www.blutspendezurich.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
