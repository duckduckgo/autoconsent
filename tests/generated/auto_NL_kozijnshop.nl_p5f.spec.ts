import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kozijnshop.nl_p5f', ['https://www.kozijnshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
