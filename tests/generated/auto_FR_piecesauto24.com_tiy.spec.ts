import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_piecesauto24.com_tiy', ['https://www.piecesauto24.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
