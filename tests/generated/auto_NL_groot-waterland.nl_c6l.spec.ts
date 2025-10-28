import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_groot-waterland.nl_c6l', ['https://groot-waterland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
