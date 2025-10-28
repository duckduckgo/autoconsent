import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_thuisnotaris.nl_64t', ['https://www.thuisnotaris.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
