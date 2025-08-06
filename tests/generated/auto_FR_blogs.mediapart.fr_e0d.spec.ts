import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blogs.mediapart.fr_e0d', ['https://blogs.mediapart.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
