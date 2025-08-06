import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meijerenblessing.nl_n3d', ['https://www.meijerenblessing.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
