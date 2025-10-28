import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adeline-cuisine.fr_789', ['https://www.adeline-cuisine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
