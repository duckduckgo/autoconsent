import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werkenbij.uva.nl_z5f', ['https://werkenbij.uva.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
