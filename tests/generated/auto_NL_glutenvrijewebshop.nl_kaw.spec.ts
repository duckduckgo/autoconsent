import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_glutenvrijewebshop.nl_kaw', ['https://www.glutenvrijewebshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
