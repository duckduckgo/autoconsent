import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docs.oracle.com_ydp', ['https://docs.oracle.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
