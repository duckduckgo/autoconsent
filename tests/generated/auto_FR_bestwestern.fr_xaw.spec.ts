import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bestwestern.fr_xaw', ['https://www.bestwestern.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
