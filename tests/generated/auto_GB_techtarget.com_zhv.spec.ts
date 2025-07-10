import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_techtarget.com_zhv', ['https://www.techtarget.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
