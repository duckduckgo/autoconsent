import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_grandsgites.com_nsv', ['https://www.grandsgites.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
