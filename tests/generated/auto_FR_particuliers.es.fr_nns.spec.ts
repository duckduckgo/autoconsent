import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_particuliers.es.fr_nns', ['https://particuliers.es.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
