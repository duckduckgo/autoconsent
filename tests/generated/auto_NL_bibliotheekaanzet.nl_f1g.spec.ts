import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bibliotheekaanzet.nl_f1g', ['https://www.bibliotheekaanzet.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
