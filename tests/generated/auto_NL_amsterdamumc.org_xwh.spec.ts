import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amsterdamumc.org_xwh', ['https://www.amsterdamumc.org/nl.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
