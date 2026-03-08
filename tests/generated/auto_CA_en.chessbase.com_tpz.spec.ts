import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_en.chessbase.com_tpz', ['https://en.chessbase.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
