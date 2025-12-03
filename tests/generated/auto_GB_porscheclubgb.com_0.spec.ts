import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_porscheclubgb.com_0', ['https://www.porscheclubgb.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
