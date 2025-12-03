import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_costesfashion.com_7vv', ['https://www.costesfashion.com/nl-nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
