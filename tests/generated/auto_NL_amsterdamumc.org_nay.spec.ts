import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amsterdamumc.org_nay', ['https://www.amsterdamumc.org/nl.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
