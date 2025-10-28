import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vakervrolijk.nl_4ds', ['https://www.vakervrolijk.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
