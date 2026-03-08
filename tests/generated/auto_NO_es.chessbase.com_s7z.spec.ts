import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_es.chessbase.com_s7z', ['https://es.chessbase.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
