import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_financeurs.moncompteformation.gouv.fr_ljx', ['https://financeurs.moncompteformation.gouv.fr/espace-public/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
