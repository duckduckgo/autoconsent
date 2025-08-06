import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cheaptickets.nl_uq6', ['https://www.cheaptickets.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
