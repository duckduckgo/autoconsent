import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ambtadvocaten.nl_qaf', ['https://www.ambtadvocaten.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
