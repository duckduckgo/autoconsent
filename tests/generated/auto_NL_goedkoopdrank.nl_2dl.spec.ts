import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_goedkoopdrank.nl_2dl', ['https://goedkoopdrank.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
