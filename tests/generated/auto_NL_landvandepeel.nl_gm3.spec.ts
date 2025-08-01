import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_landvandepeel.nl_gm3', ['https://www.landvandepeel.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
