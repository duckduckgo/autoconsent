import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_glutenvrijewebshop.nl_hhp', ['https://www.glutenvrijewebshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
