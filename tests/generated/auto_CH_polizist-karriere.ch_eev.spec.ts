import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_polizist-karriere.ch_eev', ['https://polizist-karriere.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
