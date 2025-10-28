import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deliniepartij.nl_mep', ['https://deliniepartij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
