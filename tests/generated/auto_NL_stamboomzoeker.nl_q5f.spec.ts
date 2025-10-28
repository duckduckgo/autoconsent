import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stamboomzoeker.nl_q5f', ['https://www.stamboomzoeker.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
