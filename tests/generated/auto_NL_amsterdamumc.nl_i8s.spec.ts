import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amsterdamumc.nl_i8s', ['https://www.amsterdamumc.nl/nl.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
