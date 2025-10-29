import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_play.chessbase.com_9lx', ['https://play.chessbase.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
