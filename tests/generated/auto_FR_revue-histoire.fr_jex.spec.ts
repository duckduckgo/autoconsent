import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_revue-histoire.fr_jex', ['https://revue-histoire.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
