import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bouwencyclopedie.nl_2q6', ['https://bouwencyclopedie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
