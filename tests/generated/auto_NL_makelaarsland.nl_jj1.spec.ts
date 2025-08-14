import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_makelaarsland.nl_jj1', ['https://www.makelaarsland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
