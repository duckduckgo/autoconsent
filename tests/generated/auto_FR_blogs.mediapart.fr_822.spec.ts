import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blogs.mediapart.fr_822', ['https://blogs.mediapart.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
