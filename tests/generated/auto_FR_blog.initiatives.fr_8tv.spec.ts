import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog.initiatives.fr_8tv', ['https://blog.initiatives.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
