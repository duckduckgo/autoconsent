import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onlinekabelshop.nl_flk', ['https://www.onlinekabelshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
