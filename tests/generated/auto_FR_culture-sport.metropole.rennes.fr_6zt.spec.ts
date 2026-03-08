import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_culture-sport.metropole.rennes.fr_6zt', ['https://culture-sport.metropole.rennes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
