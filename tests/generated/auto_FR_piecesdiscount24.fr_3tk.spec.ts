import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_piecesdiscount24.fr_3tk', ['https://www.piecesdiscount24.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
