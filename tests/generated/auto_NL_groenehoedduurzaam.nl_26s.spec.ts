import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_groenehoedduurzaam.nl_26s', ['https://www.groenehoedduurzaam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
