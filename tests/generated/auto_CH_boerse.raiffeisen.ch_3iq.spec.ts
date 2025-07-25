import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boerse.raiffeisen.ch_3iq', ['https://boerse.raiffeisen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
