import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vodafoneziggo.nl_jdh', ['https://www.vodafoneziggo.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
