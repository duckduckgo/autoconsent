import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centrale-canine.fr_gb1', ['https://www.centrale-canine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
