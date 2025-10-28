import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zuinigtanken.nl_m9a', ['https://www.zuinigtanken.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
