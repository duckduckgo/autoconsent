import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docs.oracle.com_lnv', ['https://docs.oracle.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
