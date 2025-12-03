import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_theaterrotterdam.nl_dh8', ['https://www.theaterrotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
