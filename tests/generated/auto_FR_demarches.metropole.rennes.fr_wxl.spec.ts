import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_demarches.metropole.rennes.fr_wxl', ['https://demarches.metropole.rennes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
