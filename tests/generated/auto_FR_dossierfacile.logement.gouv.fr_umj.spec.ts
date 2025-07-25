import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dossierfacile.logement.gouv.fr_umj', ['https://www.dossierfacile.logement.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
