import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cheaptickets.nl_s9t', ['https://www.cheaptickets.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
