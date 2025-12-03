import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_woonnetrijnmond.nl_itj', ['https://www.woonnetrijnmond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
