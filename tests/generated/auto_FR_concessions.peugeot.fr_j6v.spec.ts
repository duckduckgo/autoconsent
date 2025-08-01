import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_concessions.peugeot.fr_j6v', ['https://concessions.peugeot.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
