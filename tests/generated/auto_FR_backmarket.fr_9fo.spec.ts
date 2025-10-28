import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_backmarket.fr_9fo', ['https://www.backmarket.fr/fr-fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
