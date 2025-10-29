import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vodafoneziggo.nl_bgc', ['https://www.vodafoneziggo.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
