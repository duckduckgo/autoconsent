import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fabriekwoerden.nl_kfm', ['https://fabriekwoerden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
