import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreprises.gouv.fr_b94', ['https://www.entreprises.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
