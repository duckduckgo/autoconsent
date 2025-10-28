import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_police-nationale.interieur.gouv.fr_o8d', ['https://www.police-nationale.interieur.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
