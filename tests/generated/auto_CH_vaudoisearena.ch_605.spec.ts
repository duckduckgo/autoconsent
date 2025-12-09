import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vaudoisearena.ch_605', ['https://vaudoisearena.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
