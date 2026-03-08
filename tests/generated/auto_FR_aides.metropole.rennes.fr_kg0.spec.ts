import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aides.metropole.rennes.fr_kg0', ['https://aides.metropole.rennes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
