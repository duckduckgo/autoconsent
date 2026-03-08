import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_erfgoedopleidingen.nl_det', ['https://erfgoedopleidingen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
