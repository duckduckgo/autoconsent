import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bankinformatiepunt.nl_f7f', ['https://bankinformatiepunt.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
