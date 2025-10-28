import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kunsthalkade.nl_0t5', ['https://www.kunsthalkade.nl/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
