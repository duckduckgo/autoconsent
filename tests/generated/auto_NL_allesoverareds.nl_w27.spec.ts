import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_allesoverareds.nl_w27', ['https://allesoverareds.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
