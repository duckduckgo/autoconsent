import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.cd08.fr_6py', ['https://archives.cd08.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
