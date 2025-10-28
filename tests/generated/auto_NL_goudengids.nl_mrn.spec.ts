import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_goudengids.nl_mrn', ['https://www.goudengids.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
