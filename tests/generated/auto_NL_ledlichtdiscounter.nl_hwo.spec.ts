import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ledlichtdiscounter.nl_hwo', ['https://www.ledlichtdiscounter.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
