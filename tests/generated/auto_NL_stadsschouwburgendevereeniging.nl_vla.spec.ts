import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stadsschouwburgendevereeniging.nl_vla', ['https://www.stadsschouwburgendevereeniging.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
