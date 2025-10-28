import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gendarmerie.interieur.gouv.fr_uh4', ['https://www.gendarmerie.interieur.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
