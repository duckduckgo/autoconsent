import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_slachtofferhulp.nl_kfg', ['https://www.slachtofferhulp.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
