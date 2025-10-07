import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_woonnetrijnmond.nl_8pw', ['https://www.woonnetrijnmond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
