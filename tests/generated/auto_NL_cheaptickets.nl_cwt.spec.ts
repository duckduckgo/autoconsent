import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cheaptickets.nl_cwt', ['https://www.cheaptickets.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
