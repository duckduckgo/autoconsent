import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_avereschcampers.nl_58x', ['https://avereschcampers.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
