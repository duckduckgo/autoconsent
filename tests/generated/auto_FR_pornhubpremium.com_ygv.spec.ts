import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pornhubpremium.com_ygv', ['https://www.pornhubpremium.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
