import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dba.stackexchange.com_dpn', ['https://dba.stackexchange.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
