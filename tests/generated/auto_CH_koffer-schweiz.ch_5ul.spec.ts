import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_koffer-schweiz.ch_5ul', ['https://www.koffer-schweiz.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
