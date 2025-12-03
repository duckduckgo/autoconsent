import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hypotheker.nl_myi', ['https://www.hypotheker.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
