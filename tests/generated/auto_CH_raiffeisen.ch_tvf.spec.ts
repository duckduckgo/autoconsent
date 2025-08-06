import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_raiffeisen.ch_tvf', ['https://www.raiffeisen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
