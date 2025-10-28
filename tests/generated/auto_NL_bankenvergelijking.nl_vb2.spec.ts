import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bankenvergelijking.nl_vb2', ['https://www.bankenvergelijking.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
