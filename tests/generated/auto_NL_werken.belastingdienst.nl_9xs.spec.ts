import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werken.belastingdienst.nl_9xs', ['https://werken.belastingdienst.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
