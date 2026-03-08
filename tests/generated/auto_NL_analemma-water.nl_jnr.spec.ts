import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_analemma-water.nl_jnr', ['https://analemma-water.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
