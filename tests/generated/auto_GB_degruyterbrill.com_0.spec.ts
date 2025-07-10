import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_degruyterbrill.com_0', ['https://www.degruyterbrill.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
