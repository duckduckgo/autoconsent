import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_piecesauto.fr_l3t', ['https://www.piecesauto.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
