import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_backmarket.nl_64f', ['https://www.backmarket.nl/nl-nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
