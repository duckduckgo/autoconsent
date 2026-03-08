import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.landes.fr_mfl', ['https://archives.landes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
