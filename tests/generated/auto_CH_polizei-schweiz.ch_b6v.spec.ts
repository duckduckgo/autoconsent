import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_polizei-schweiz.ch_b6v', ['https://www.polizei-schweiz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
