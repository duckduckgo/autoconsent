import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onlinekabelshop.nl_f1x', ['https://www.onlinekabelshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
