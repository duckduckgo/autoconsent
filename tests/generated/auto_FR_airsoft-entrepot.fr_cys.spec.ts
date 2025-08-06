import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_airsoft-entrepot.fr_cys', ['https://www.airsoft-entrepot.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
