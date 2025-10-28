import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hollyland.com_jgb', ['https://www.hollyland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
