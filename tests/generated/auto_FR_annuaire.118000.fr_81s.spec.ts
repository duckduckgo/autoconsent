import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annuaire.118000.fr_81s', ['https://annuaire.118000.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
