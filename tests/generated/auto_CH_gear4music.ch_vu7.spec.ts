import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gear4music.ch_vu7', ['https://www.gear4music.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
