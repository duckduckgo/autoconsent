import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_topgeschenken.nl_vsx', ['https://topgeschenken.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
