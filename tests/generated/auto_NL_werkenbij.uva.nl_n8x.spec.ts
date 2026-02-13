import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werkenbij.uva.nl_n8x', ['https://werkenbij.uva.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
