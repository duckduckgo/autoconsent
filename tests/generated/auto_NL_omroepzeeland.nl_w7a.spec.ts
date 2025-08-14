import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omroepzeeland.nl_w7a', ['https://www.omroepzeeland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
