import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_facdedroit.univ-lyon3.fr_txs', ['https://facdedroit.univ-lyon3.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
