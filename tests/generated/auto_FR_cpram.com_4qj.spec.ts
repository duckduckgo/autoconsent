import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cpram.com_4qj', ['https://cpram.com/fra/fr/particuliers'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
