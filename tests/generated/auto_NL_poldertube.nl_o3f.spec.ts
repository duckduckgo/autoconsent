import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_poldertube.nl_o3f', ['https://www.poldertube.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
