import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_egmondhalvemarathon.nl_r0e', ['https://www.egmondhalvemarathon.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
