import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pornhubpremium.com_9tf', ['https://www.pornhubpremium.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
