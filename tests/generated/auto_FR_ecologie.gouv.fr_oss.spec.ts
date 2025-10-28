import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecologie.gouv.fr_oss', ['https://www.ecologie.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
