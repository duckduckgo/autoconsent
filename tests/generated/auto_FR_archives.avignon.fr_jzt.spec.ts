import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.avignon.fr_jzt', ['https://archives.avignon.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
