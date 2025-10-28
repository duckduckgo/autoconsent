import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hulpmiddelenwijzer.nl_mxv', ['https://www.hulpmiddelenwijzer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
