import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_roughtrade.com_yxe', ['https://www.roughtrade.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
