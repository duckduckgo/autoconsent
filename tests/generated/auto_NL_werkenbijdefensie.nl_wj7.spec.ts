import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werkenbijdefensie.nl_wj7', ['https://werkenbijdefensie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
