import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vandijkstore.nl_459', ['https://www.vandijkstore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
