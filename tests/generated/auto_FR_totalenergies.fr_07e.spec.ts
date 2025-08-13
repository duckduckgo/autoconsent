import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_totalenergies.fr_07e', ['https://www.totalenergies.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
