import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bestwestern.fr_5kg', ['https://www.bestwestern.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
