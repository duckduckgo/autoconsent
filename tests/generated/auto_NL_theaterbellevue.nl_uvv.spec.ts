import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_theaterbellevue.nl_uvv', ['https://www.theaterbellevue.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
