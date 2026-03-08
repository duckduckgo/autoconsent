import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_debadjassenwinkel.nl_9u4', ['https://debadjassenwinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
