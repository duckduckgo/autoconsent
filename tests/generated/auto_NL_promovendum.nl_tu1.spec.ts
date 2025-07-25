import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_promovendum.nl_tu1', ['https://www.promovendum.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
