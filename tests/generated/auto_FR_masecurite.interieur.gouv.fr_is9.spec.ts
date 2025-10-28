import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_masecurite.interieur.gouv.fr_is9', ['https://www.masecurite.interieur.gouv.fr/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
