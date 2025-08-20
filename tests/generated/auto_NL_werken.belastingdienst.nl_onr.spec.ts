import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werken.belastingdienst.nl_onr', ['https://werken.belastingdienst.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
