import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boerse.raiffeisen.ch_gst', ['https://boerse.raiffeisen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
