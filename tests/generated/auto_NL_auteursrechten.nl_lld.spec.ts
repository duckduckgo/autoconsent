import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_auteursrechten.nl_lld', ['https://auteursrechten.nl/en/homepage-new/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
