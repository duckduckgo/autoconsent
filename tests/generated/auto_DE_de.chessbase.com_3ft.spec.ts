import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.chessbase.com_3ft', ['https://de.chessbase.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
