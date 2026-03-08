import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dakengevelrenovaties.nl_8nz', ['https://dakengevelrenovaties.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
