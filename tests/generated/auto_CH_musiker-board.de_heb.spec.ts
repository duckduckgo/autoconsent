import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_musiker-board.de_heb', ['https://www.musiker-board.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
