import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sanitairkamer.nl_vig', ['https://sanitairkamer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
