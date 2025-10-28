import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_clingendael.org_ksy', ['https://www.clingendael.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
