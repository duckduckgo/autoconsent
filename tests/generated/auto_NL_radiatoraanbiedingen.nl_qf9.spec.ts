import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_radiatoraanbiedingen.nl_qf9', ['https://www.radiatoraanbiedingen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
