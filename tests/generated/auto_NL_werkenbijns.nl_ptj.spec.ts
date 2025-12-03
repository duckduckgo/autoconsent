import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_werkenbijns.nl_ptj', ['https://www.werkenbijns.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
