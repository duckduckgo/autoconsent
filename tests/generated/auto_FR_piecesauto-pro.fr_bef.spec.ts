import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_piecesauto-pro.fr_bef', ['https://www.piecesauto-pro.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
