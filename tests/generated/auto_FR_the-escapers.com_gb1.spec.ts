import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_the-escapers.com_gb1', ['https://www.the-escapers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
