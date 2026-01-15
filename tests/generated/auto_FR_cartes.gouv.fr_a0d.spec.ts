import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cartes.gouv.fr_a0d', ['https://cartes.gouv.fr/explorer-les-cartes/?'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
