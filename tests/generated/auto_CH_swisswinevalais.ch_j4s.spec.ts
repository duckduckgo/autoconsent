import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisswinevalais.ch_j4s', ['https://swisswinevalais.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
