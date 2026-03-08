import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.sarthe.fr_41g', ['https://archives.sarthe.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
