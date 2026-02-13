import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gpgrootegmondpieregmond.nl_zoc', ['https://www.gpgrootegmondpieregmond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
