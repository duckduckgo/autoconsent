import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bakkerenbosch.nl_yhl', ['https://bakkerenbosch.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
