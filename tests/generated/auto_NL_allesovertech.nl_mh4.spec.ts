import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_allesovertech.nl_mh4', ['https://allesovertech.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
