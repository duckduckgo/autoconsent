import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_emplois.inclusion.beta.gouv.fr_9y1', ['https://emplois.inclusion.beta.gouv.fr/search/employers'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
