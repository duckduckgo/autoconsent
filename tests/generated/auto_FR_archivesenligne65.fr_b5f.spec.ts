import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archivesenligne65.fr_b5f', ['https://archivesenligne65.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
