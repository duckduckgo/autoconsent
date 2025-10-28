import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_culture.gouv.fr_2o4', ['https://www.culture.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
