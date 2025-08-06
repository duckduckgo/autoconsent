import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hansanders.nl_l6s', ['https://www.hansanders.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
