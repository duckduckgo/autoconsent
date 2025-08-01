import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_feldschloesschen.ch_ohm', ['https://feldschloesschen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
