import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meesterdennis.nl_ios', ['https://www.meesterdennis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
