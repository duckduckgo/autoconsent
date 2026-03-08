import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog.recollection.fr_1r6', ['https://blog.recollection.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
