import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.allier.fr_j13', ['https://archives.allier.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
