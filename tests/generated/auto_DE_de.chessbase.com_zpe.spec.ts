import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.chessbase.com_zpe', ['https://de.chessbase.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
