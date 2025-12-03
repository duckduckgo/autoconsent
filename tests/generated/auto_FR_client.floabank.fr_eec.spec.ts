import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_client.floabank.fr_eec', ['https://client.floabank.fr/fr/identification/authentification.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
