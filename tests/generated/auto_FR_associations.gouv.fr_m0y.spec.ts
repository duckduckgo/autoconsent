import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_associations.gouv.fr_m0y', ['https://www.associations.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
