import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_verwarminghandel.nl_snt', ['https://www.verwarminghandel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
