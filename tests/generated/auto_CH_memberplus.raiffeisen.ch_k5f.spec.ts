import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_memberplus.raiffeisen.ch_k5f', ['https://memberplus.raiffeisen.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
