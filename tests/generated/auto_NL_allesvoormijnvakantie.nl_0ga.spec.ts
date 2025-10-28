import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_allesvoormijnvakantie.nl_0ga', ['https://allesvoormijnvakantie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
