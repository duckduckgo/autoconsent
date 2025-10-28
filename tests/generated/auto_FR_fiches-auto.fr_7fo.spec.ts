import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fiches-auto.fr_7fo', ['https://www.fiches-auto.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
