import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cache-cache.fr_3n0', ['https://www.cache-cache.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
