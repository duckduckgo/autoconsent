import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lloydsbank.nl_0bx', ['https://www.lloydsbank.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
