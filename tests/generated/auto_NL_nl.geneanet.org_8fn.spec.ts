import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.geneanet.org_8fn', ['https://nl.geneanet.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
