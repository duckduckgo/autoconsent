import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_play.tetris.com_6z9', ['https://play.tetris.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
