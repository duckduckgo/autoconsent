import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_texelsecourant.nl_rbb', ['https://www.texelsecourant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
