import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tresor.economie.gouv.fr_rr1', ['https://www.tresor.economie.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
