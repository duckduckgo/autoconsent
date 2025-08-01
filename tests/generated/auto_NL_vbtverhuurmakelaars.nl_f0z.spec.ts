import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vbtverhuurmakelaars.nl_f0z', ['https://vbtverhuurmakelaars.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
