import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_immatriculation.ants.gouv.fr_u55', ['https://immatriculation.ants.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
