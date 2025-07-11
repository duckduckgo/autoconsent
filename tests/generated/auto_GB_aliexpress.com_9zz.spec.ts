import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aliexpress.com_9zz', ['https://www.aliexpress.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
