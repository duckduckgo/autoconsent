import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bakker-ijlst.nl_kw2', ['https://bakker-ijlst.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
