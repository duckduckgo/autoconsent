import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cdn.chausson.fr_0zc', ['https://cdn.chausson.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
