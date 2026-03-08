import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dechets.metropole.rennes.fr_hbv', ['https://dechets.metropole.rennes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
