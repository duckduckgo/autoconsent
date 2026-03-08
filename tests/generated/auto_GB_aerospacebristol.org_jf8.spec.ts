import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aerospacebristol.org_jf8', ['https://aerospacebristol.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
