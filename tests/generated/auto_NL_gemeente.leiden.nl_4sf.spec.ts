import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gemeente.leiden.nl_4sf', ['https://gemeente.leiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
