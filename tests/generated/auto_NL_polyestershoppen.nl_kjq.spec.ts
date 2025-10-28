import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_polyestershoppen.nl_kjq', ['https://polyestershoppen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
