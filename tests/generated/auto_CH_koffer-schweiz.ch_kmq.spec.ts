import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_koffer-schweiz.ch_kmq', ['https://www.koffer-schweiz.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
