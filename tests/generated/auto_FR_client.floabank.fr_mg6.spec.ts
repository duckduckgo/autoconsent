import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_client.floabank.fr_mg6', ['https://client.floabank.fr/fr/identification/authentification.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
