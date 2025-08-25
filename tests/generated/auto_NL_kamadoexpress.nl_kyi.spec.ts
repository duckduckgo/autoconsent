import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kamadoexpress.nl_kyi', ['https://kamadoexpress.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
