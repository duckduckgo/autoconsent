import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_knivesandtools.nl_bd7', ['https://www.knivesandtools.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
