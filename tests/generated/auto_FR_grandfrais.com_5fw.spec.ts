import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_grandfrais.com_5fw', ['https://www.grandfrais.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
