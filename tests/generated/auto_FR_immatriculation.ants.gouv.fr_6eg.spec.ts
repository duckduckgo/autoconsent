import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_immatriculation.ants.gouv.fr_6eg', ['https://immatriculation.ants.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
