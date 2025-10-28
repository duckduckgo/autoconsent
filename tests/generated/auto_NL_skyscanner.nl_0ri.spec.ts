import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_skyscanner.nl_0ri', ['https://www.skyscanner.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
