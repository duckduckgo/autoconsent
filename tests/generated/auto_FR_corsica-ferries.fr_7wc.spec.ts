import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_corsica-ferries.fr_7wc', ['https://www.corsica-ferries.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
