import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_domstadevenementen.nl_hnj', ['https://domstadevenementen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
