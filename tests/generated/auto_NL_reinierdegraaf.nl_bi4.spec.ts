import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_reinierdegraaf.nl_bi4', ['https://reinierdegraaf.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
