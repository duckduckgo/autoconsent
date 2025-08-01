import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_reumanederland.nl_nsd', ['https://reumanederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
