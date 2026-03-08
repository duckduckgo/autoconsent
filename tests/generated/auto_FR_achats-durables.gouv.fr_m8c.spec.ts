import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_achats-durables.gouv.fr_m8c', ['https://achats-durables.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
