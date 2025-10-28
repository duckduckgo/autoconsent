import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_seban-associes.avocat.fr_qz2', ['https://www.seban-associes.avocat.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
