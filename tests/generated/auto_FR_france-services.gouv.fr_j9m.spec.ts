import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-services.gouv.fr_j9m', ['https://www.france-services.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
