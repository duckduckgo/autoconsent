import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rondompodotherapeuten.nl_j1w', ['https://rondompodotherapeuten.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
