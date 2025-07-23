import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aliexpress.com_f8y', ['https://www.aliexpress.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
