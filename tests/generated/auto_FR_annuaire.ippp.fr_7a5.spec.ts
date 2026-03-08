import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_annuaire.ippp.fr_7a5', ['https://annuaire.ippp.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
