import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-challenges.com_w9q', ['https://france-challenges.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
