import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_filmtheaterfraterhuis.nl_h3t', ['https://filmtheaterfraterhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
