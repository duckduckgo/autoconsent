import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_candidat.examens-concours.gouv.fr_ecn', ['https://candidat.examens-concours.gouv.fr/cyccandidat/portal/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
