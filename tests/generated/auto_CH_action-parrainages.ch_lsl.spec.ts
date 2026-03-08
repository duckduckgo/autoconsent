import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_action-parrainages.ch_lsl', ['https://action-parrainages.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
