import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_plus.transformation.gouv.fr_3j7', ['https://www.plus.transformation.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
