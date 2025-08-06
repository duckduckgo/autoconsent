import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_streekstadcentraal.nl_9tu', ['https://streekstadcentraal.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
