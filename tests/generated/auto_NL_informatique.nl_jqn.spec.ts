import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_informatique.nl_jqn', ['https://www.informatique.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
