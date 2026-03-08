import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_droit.univ-lyon2.fr_ame', ['https://droit.univ-lyon2.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
