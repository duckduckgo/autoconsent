import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_erfgoedcranendonck.nl_0va', ['https://erfgoedcranendonck.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
