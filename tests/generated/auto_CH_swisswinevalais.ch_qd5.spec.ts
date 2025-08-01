import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisswinevalais.ch_qd5', ['https://swisswinevalais.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
