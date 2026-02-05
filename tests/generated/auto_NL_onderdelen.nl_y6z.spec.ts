import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onderdelen.nl_y6z', ['https://www.onderdelen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
