import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kennispleingehandicaptensector.nl_y42', ['https://www.kennispleingehandicaptensector.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
