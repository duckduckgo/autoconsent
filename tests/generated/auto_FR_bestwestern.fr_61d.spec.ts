import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bestwestern.fr_61d', ['https://www.bestwestern.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
