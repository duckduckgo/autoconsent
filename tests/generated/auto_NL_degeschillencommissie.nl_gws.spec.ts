import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_degeschillencommissie.nl_gws', ['https://www.degeschillencommissie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
