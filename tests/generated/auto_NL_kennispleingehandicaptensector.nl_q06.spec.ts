import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kennispleingehandicaptensector.nl_q06', ['https://www.kennispleingehandicaptensector.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
