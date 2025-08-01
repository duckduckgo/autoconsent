import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cache-cache.fr_ry3', ['https://www.cache-cache.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
