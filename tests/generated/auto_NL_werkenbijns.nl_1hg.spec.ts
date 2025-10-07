import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werkenbijns.nl_1hg', ['https://www.werkenbijns.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
