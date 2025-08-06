import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_makelaarsland.nl_tpc', ['https://www.makelaarsland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
