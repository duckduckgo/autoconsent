import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jardin-secrets.com_9u1', ['https://jardin-secrets.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
