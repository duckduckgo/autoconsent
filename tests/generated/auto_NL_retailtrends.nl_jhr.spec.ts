import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_retailtrends.nl_jhr', ['https://retailtrends.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
