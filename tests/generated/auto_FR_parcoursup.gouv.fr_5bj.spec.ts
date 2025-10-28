import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_parcoursup.gouv.fr_5bj', ['https://www.parcoursup.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
