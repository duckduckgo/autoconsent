import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kennispleingehandicaptensector.nl_di0', ['https://www.kennispleingehandicaptensector.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
