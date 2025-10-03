import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_frankenergie.nl_9xh', ['https://www.frankenergie.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
