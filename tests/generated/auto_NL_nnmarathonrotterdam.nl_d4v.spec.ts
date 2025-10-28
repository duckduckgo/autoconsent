import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nnmarathonrotterdam.nl_d4v', ['https://nnmarathonrotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
