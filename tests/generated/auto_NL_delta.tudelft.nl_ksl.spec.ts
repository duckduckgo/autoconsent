import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_delta.tudelft.nl_ksl', ['https://delta.tudelft.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
