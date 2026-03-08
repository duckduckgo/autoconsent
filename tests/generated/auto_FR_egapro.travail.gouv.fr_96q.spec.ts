import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_egapro.travail.gouv.fr_96q', ['https://egapro.travail.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
