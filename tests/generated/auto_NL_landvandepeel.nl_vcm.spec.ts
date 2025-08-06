import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_landvandepeel.nl_vcm', ['https://www.landvandepeel.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
