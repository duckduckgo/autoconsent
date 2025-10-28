import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_verschillen-tussen.nl_mal', ['https://verschillen-tussen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
