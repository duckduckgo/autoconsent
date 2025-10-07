import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_theaterrotterdam.nl_crl', ['https://www.theaterrotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
