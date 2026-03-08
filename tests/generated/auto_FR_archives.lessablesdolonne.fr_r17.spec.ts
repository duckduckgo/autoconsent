import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.lessablesdolonne.fr_r17', ['https://archives.lessablesdolonne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
