import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_manufactum.nl_w9l', ['https://www.manufactum.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
