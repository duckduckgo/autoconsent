import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assemblagedirect.fr_94n', ['https://assemblagedirect.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
