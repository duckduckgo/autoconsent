import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blgwonen.nl_9g0', ['https://www.blgwonen.nl/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
