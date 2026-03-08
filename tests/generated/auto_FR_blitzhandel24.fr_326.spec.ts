import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blitzhandel24.fr_326', ['https://blitzhandel24.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
