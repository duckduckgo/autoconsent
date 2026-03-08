import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_boschwachter.nl_rro', ['https://boschwachter.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
