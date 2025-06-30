import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blogs.oracle.com_ogv', ['https://blogs.oracle.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
