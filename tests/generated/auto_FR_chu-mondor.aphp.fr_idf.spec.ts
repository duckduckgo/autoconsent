import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chu-mondor.aphp.fr_idf', ['https://chu-mondor.aphp.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
