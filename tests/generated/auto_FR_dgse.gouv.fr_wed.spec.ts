import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dgse.gouv.fr_wed', ['https://www.dgse.gouv.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
