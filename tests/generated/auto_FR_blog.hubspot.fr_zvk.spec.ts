import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog.hubspot.fr_zvk', ['https://blog.hubspot.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
