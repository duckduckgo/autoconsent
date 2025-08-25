import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_parasol-shop.nl_gps', ['https://www.parasol-shop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
