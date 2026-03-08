import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cijferrekenaar.nl_0md', ['https://cijferrekenaar.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
