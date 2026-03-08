import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_billetterie.cite-sciences.fr_7kv', ['https://billetterie.cite-sciences.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
