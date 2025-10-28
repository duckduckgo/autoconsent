import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aliexpress.com_rg1', ['https://www.aliexpress.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
