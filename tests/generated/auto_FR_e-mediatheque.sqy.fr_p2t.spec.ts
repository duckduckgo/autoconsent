import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_e-mediatheque.sqy.fr_p2t', ['https://e-mediatheque.sqy.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
