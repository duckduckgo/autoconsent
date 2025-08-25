import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werkenbijdefensie.nl_0cv', ['https://werkenbijdefensie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
