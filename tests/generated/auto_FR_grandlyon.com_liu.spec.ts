import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_grandlyon.com_liu', ['https://www.grandlyon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
