import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_motorkledingstore.nl_zj7', ['https://www.motorkledingstore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
