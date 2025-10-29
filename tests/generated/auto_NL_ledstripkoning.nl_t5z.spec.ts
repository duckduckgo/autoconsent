import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ledstripkoning.nl_t5z', ['https://www.ledstripkoning.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
