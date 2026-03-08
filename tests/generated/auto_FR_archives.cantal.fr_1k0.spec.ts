import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives.cantal.fr_1k0', ['https://archives.cantal.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
