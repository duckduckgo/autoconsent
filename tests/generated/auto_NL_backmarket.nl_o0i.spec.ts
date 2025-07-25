import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_backmarket.nl_o0i', ['https://www.backmarket.nl/nl-nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
