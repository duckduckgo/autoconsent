import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_speedyservices.com_0', ['https://www.speedyservices.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
