import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_theaterbellevue.nl_p64', ['https://www.theaterbellevue.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
