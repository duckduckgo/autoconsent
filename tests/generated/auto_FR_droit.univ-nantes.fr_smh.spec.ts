import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_droit.univ-nantes.fr_smh', ['https://droit.univ-nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
