import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisswinevalais.ch_uo5', ['https://swisswinevalais.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
