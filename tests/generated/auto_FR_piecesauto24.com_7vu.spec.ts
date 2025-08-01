import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_piecesauto24.com_7vu', ['https://www.piecesauto24.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
