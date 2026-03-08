import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_condesurlescaut.fr_7q7', ['https://condesurlescaut.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
