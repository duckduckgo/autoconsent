import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-client.nrjmobile.fr_xv1', ['https://espace-client.nrjmobile.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
