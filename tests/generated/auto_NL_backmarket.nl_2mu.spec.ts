import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_backmarket.nl_2mu', ['https://www.backmarket.nl/nl-nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
