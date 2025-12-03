import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_texelsecourant.nl_v4b', ['https://www.texelsecourant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
