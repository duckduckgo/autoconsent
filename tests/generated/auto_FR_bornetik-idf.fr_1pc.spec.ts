import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bornetik-idf.fr_1pc', ['https://bornetik-idf.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
