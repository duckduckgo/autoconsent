import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_complementaire-sante-solidaire.gouv.fr_nt8', ['https://www.complementaire-sante-solidaire.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
