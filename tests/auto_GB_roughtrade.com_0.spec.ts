import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_roughtrade.com_0', ['https://www.roughtrade.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
