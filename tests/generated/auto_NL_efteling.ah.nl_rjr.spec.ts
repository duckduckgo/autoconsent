import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_efteling.ah.nl_rjr', ['https://efteling.ah.nl/efteling/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
