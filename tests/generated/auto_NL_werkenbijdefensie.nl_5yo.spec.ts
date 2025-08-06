import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werkenbijdefensie.nl_5yo', ['https://werkenbijdefensie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
