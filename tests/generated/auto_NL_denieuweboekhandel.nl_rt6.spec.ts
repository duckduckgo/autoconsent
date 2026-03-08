import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denieuweboekhandel.nl_rt6', ['https://denieuweboekhandel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
