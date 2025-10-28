import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pour-les-personnes-agees.gouv.fr_z3o', ['https://www.pour-les-personnes-agees.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
