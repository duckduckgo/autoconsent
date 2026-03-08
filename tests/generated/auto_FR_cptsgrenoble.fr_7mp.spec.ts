import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cptsgrenoble.fr_7mp', ['https://cptsgrenoble.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
