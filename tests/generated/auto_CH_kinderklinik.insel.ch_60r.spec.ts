import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kinderklinik.insel.ch_60r', ['https://kinderklinik.insel.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
