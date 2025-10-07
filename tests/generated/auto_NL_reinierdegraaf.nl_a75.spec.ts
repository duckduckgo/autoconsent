import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_reinierdegraaf.nl_a75', ['https://reinierdegraaf.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
