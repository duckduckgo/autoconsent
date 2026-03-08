import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fritz.chessbase.com_lfk', ['https://fritz.chessbase.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
