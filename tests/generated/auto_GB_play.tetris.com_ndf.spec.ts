import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_play.tetris.com_ndf', ['https://play.tetris.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
