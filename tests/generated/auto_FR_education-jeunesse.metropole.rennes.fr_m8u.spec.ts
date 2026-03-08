import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_education-jeunesse.metropole.rennes.fr_m8u', ['https://education-jeunesse.metropole.rennes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
