import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_reumanederland.nl_bpj', ['https://reumanederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
