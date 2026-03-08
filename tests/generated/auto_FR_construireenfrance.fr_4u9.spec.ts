import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_construireenfrance.fr_4u9', ['https://construireenfrance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
