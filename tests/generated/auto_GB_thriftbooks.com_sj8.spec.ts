import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thriftbooks.com_sj8', ['https://www.thriftbooks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
