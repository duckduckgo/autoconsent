import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meesterdennis.nl_med', ['https://www.meesterdennis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
