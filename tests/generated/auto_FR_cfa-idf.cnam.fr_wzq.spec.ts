import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cfa-idf.cnam.fr_wzq', ['https://cfa-idf.cnam.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
