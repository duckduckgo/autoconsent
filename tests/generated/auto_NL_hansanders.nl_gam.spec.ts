import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hansanders.nl_gam', ['https://www.hansanders.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
