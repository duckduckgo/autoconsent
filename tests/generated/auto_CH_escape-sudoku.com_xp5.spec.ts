import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_escape-sudoku.com_xp5', ['https://escape-sudoku.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
