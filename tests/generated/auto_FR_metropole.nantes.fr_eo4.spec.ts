import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_metropole.nantes.fr_eo4', ['https://metropole.nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
