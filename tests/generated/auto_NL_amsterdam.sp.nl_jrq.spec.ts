import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amsterdam.sp.nl_jrq', ['https://amsterdam.sp.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
