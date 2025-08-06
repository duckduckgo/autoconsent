import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amsterdamumc.nl_pwc', ['https://www.amsterdamumc.nl/nl.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
