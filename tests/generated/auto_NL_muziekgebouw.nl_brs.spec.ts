import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_muziekgebouw.nl_brs', ['https://www.muziekgebouw.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
