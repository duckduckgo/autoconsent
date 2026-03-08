import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_beautifulbrideshop.nl_won', ['https://beautifulbrideshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
