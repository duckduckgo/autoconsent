import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_motorkledingstore.nl_mfa', ['https://www.motorkledingstore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
