import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-chaleur-urbaine.beta.gouv.fr_6h9', ['https://france-chaleur-urbaine.beta.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
