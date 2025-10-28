import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_francenum.gouv.fr_1o4', ['https://www.francenum.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
