import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_immo.raiffeisen.ch_09r', ['https://immo.raiffeisen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
