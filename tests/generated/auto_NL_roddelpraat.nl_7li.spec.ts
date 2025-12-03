import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_roddelpraat.nl_7li', ['https://www.roddelpraat.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
