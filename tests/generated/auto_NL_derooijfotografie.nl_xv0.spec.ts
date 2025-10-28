import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_derooijfotografie.nl_xv0', ['https://www.derooijfotografie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
