import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_classeetgrimaces.fr_bd5', ['https://www.classeetgrimaces.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
