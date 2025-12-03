import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_landvandepeel.nl_rfw', ['https://www.landvandepeel.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
