import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_particuliers.es.fr_5zb', ['https://particuliers.es.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
