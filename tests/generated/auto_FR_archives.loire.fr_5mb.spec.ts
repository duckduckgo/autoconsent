import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.loire.fr_5mb', ['https://archives.loire.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
