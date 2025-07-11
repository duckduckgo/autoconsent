import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dunfermlinepress.com_tup', ['https://www.dunfermlinepress.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
