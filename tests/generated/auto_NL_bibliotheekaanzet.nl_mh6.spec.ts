import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bibliotheekaanzet.nl_mh6', ['https://www.bibliotheekaanzet.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
