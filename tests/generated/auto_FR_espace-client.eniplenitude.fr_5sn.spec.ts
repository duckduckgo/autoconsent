import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-client.eniplenitude.fr_5sn', ['https://espace-client.eniplenitude.fr/auth/connexion'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
