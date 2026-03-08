import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.chessbase.com_zqp', ['https://fr.chessbase.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
