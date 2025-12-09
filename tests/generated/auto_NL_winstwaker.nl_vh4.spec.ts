import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_winstwaker.nl_vh4', ['https://www.winstwaker.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
