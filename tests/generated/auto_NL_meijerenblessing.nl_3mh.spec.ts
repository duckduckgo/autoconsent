import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meijerenblessing.nl_3mh', ['https://www.meijerenblessing.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
