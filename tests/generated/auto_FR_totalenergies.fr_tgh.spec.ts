import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_totalenergies.fr_tgh', ['https://www.totalenergies.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
