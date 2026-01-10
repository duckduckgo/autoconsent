import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_madeformoments.nl_6w9', ['https://madeformoments.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
