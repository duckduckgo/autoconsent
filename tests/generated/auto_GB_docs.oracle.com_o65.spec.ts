import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_docs.oracle.com_o65', ['https://docs.oracle.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
