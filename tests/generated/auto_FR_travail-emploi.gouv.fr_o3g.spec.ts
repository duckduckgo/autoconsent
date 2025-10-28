import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_travail-emploi.gouv.fr_o3g', ['https://travail-emploi.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
