import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omroepzeeland.nl_ly6', ['https://www.omroepzeeland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
